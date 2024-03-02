"use server"

import { signIn, signOut } from "@/app/auth/actions/auth";

export async function authGithub() {
    try {
        await signIn("github");
    } catch (error: any) {
        if (error.message === "NEXT_REDIRECT") {
            throw error;
        }
        return error.message;
    }
}
export async function authGoogle() {
    try {
        await signIn("google");
    } catch (error: any) {
        if (error.message === "NEXT_REDIRECT") {
            throw error;
        }
        return error.message;
    }
}

export async function authSignOut() {
    await signOut();
}
