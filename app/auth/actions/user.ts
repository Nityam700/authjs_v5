"use server"

import { prisma } from "@/prisma/prisma"
import { auth } from "@/app/auth/actions/auth"
import { revalidatePath } from "next/cache"

export async function getUserUsername() {
    const session = await auth()
    const id = session?.user?.id as string
    if (session) {
        try {
            const user = await prisma.user.findUnique({
                where: { id: id },
                select: {
                    userName: true
                }
            });

            return user;
        } catch (error) {
            console.log(error, "FAILED TO GET USER BY USER ID");
            throw error; // Optionally, rethrow the error to handle it elsewhere
        }
    }
}

export async function updateUser(formData: FormData) {
    try {
        const id = formData.get("id") as string
        const name = formData.get("name") as string
        const username = formData.get("username") as string
        const bio = formData.get("bio") as string
        const links = formData.get("links") as string
        await prisma.user.update({
            where: {
                id: id
            },
            data: {
                name: name,
                userName: username,
                bio: bio,
                links: links
            }
        })
    } catch (error) {
        console.error(error, "FAILDED TO UPDATE USER")
    }
    revalidatePath('/auth/manage/users')
}


export async function suspendUser(formData: FormData) {
    try {
        const username = formData.get("username") as string
        await prisma.user.update({
            where: {
                userName: username
            },
            data: {
                role: "SUSPENDED"
            }
        })
    } catch (error) {
        console.error(error, "FAILED TO SUSPEND USER")
    }
    revalidatePath('/auth/manage/users')
}

export async function makeAdmin(formData: FormData) {
    try {
        const username = formData.get("username") as string
        await prisma.user.update({
            where: {
                userName: username
            },
            data: {
                role: "ADMIN"
            }
        })
    } catch (error) {
        console.error(error, "FAILED TO SUSPEND USER")
    }
    revalidatePath('/auth/manage/users')
}

export async function makeManager(formData: FormData) {
    try {
        const username = formData.get("username") as string
        await prisma.user.update({
            where: {
                userName: username
            },
            data: {
                role: "MANAGER"
            }
        })
    } catch (error) {
        console.error(error, "FAILED TO SUSPEND USER")
    }
    revalidatePath('/auth/manage/users')
}

export async function makeUser(formData: FormData) {
    try {
        const username = formData.get("username") as string
        await prisma.user.update({
            where: {
                userName: username
            },
            data: {
                role: "USER"
            }
        })
    } catch (error) {
        console.error(error, "FAILED TO SUSPEND USER")
    }
    revalidatePath('/auth/manage/users')
}

export async function getUserRole() {
    try {
        const user = await getUserUsername()
        const username = user?.userName
        const userRole = await prisma.user.findUnique({
            where: {
                userName: username
            },
            select: {
                role: true
            }
        });
        return userRole
    } catch (error) {
        console.error(error, "FAILDED TO GET USER ROLE /auth/actions/user.ts")
    }
}


export async function getUserDetails() {
    const session = await auth()
    const user = await getUserUsername();
    const username = user?.userName
    if (session) {
        try {
            const userData = await prisma.user.findUnique({
                where: {
                    userName: username
                },
                select: {
                    name: true,
                    userName: true,
                    bio: true,
                    links: true,
                    image: true,
                    email: true,
                    date: true,
                    role: true,
                }
            });
            return userData;
        } catch (error) {
            console.log(error, "FAILED TO GET USER DETAILS : /auth/actions/user.ts");
        }
    }
}