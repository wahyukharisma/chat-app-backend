import { Request, Response } from 'express';
import pool from '../models/db';

export const fetchContacts = async (req: Request, res: Response) : Promise<any> => {
    let userId = null;
    if(req.user){
        userId = req.user.id;
    }

    try{
        const result = await pool.query(
            `
            SELECT u.id AS contact_id, u.username, u.email
            FROM users u
            JOIN contacts c ON c.contact_id = u.id
            WHERE c.user_id = $1
            ORDER BY u.username ASC;
            `,
            [userId]
        );

        return res.json(result.rows);
    }catch(error) {
        console.error('Error fetching contacts: ', error);
        return res.status(500).json({error: 'Failed to fetch contacts'});
    }
}

export const addContact = async (req: Request, res: Response) : Promise<any> => {
    let userId = null;
    if(req.user){
        userId = req.user.id;
    }

    const {contactEmail} = req.body;

    try{
        const contactExists = await pool.query(
            `
            SELECT id from users where email = $1;
            `,
            [contactEmail]
        )

        if(contactExists.rowCount === 0){
            return res.status(404).json({error: 'Contact not found'});
        }

        const contactId = contactExists.rows[0].id;

        await pool.query(
            `
            INSERT INTO contacts (user_id, contact_id)
            VALUES ($1,$2)
            ON CONFLICT DO NOTHING;
            `,
            [userId, contactId]
        );

        return res.status(201).json({message: 'Contact added successfully'});
    }catch(error){
        console.error('Error adding contacts: ', error);
        return res.status(500).json({error: 'Failed to adding contacts'});
    }
}