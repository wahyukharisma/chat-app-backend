import e, { Request, Response } from 'express';
import pool from '../models/db';

export const fetchAllMessagesByConversationId = async (req: Request, res: Response) => {
    const {conversationId} = req.params;

    try{
        const result = await pool.query(
            `
            SELECT m.id, m.content, m.sender_id, m.conversation_id, m.created_at
            FROM messages m
            WHERE m.conversation_id = $1
            ORDER BY m.created_at ASC;
            `,
            [conversationId]
        )

        res.json(result.rows);
    }catch(err){
        res.status(500).json({error: 'Failed to fetch message'});
    }
}

export const saveMessage = async (conversationId: string, senderId: String, content: String) => {
    try{
        const result = await pool.query(
            `
            INSERT INTO messages (conversation_id, sender_id, content)
            VALUES ($1,$2,$3)
            RETURNING *;
            `,
            [conversationId, senderId, content]
        )

        return result.rows[0];
    }catch(err){
        console.error('Error saving message : ', err);
        throw new Error('Failed to save message');
    }
}