"use server"

import { prisma } from "@/prisma/prisma";
import { revalidatePath } from "next/cache";

export async function getAllUser() {
    try {
        const allUser = await prisma.user.findMany({
            include: {
                accounts: {
                    select: {
                        provider: true
                    }
                },
            },
            orderBy: {
                date: "desc"
            }
        })
        return allUser;
    } catch (error) {
        console.error(error, "FAILED TO GET ALL USERS /auth/actions/authData.ts")
    }
    revalidatePath('/auth/manage/users')
}

export async function getRecentUser() {
    try {
        const recentUser = await prisma.user.findMany({
            take: 4,
            include: {
                accounts: {
                    select: {
                        provider: true
                    }
                }
            },
            orderBy: {
                date: 'desc'
            }
        });
        return recentUser;
    } catch (error) {
        console.error(error, "FAILED TO GET RECENT USER /auth/actions/authData.ts")
    }
}

export async function getUserCount() {
    try {
        const userCount = await prisma.user.count();
        return userCount;
    } catch (error) {
        console.error("Error fetching users count:", error);
    }
    revalidatePath('/auth/manage')
}

export async function getAccountsCount() {
    try {
        const accountsCount = await prisma.account.count();
        return accountsCount;
    } catch (error) {
        console.error("Error fetching users count:", error);
    }
    revalidatePath('/auth/manage')
}

export async function getSessionCount() {
    try {
        const sessionCount = await prisma.session.count();
        return sessionCount;
    } catch (error) {
        console.error("Error fetching users count:", error);
    }
    revalidatePath('/auth/manage')
}