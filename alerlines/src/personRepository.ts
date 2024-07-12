'use server'

import { db } from './database'
import { Test } from './types'

export async function select() {
    try {
        return await db.selectFrom('test')
            .selectAll()
            .executeTakeFirst()
    } catch (error) {
        return error
    }
}