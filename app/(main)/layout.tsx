import Header from "../components/Header";

export default function RootLayout({children}: {children: React.ReactNode}){
    return (
        <>
        <Header />
            <main className="bg-surface font-body text-on-surface selection:bg-primary-container selection:text-on-primary-container overflow-x-hidden">
                {children}
            </main>
        </>
    )
}