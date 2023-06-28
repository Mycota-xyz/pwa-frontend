import RootStyleRegistry from "./emotion";

export default function RootLayout({children}: {children: React.ReactNode}) {
    return (
        <html lang="en-US">
            <head/>
            <RootStyleRegistry>
                {children}
            </RootStyleRegistry>
        </html>
    )
}