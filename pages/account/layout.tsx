import NavbarMobile from "@/components/Navbar/NavbarMobile";

export default function AccountLayout({
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