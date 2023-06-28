import NavbarMobile from "@/components/Navbar/NavbarMobile";

export default function AssetsLayout({
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