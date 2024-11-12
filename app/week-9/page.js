"use client";

// Needed for Link to work
import Link from "next/link";

// Import useUserAuth hook for authentication functionality
import { useUserAuth } from "./_utils/auth-context";

// Login page component
export default function Page() {
    // Destructure user, gitHubSignIn, and firebaseSignOut from useUserAuth hook
    const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

    const login = async () => {
        // Call gitHubSignIn function
        await gitHubSignIn();
    }

    const logout = async () => {
        // Call firebaseSignOut function
        await firebaseSignOut();
    }

    return (
        <main className="bg-slate-800 min-h-screen">
            <div>
                <h1 className="text-2xl font-semibold text-sky-100 p-10 text-center">Week 9 - Login</h1>
                {user && (
                    <p>
                        Welcome, {user.displayName} ({user.email})
                    </p>
                )}
                {user ? (
                    <div className="text-center">
                        <Link href="/week-9/shopping-list" className="px-4 py-2 border rounded text-sky-100 border-sky-100">Go to Shopping List</Link>
                        <button type="button" onClick={logout} className="px-4 py-2 border rounded text-sky-100 border-sky-100">Logout</button>
                    </div>
                ) : (
                    <div className="text-center">
                        <button type="button" onClick={login} className="px-4 py-2 border rounded text-sky-100 border-sky-100">Login with GitHub</button>
                    </div>
                )}
            </div>
        </main>
    )
}
