import { ProfileHeader, LinkButton, Footer } from "@/components";
import { profileData, linksData } from "@/data/links";

export default function Home() {
  return (
    <main className="mx-auto flex min-h-dvh w-full max-w-md flex-col px-5">
      {/* Profile Section */}
      <ProfileHeader profile={profileData} />

      {/* Links Section */}
      <section
        className="flex flex-col gap-3 py-8"
        aria-label="Links de contato e redes sociais"
      >
        {linksData.map((link, index) => (
          <LinkButton key={link.id} link={link} index={index} />
        ))}
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
}
