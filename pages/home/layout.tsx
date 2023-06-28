import NavbarMobile from "@/components/Navbar/NavbarMobile";

export default function HomeLayout({
    children
}: {
    children: React.ReactNode;
}) {
    return (
        <section>
            <NavbarMobile />
            {children}
        </section>
    )
}