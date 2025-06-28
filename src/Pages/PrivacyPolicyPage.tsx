// src/pages/PrivacyPolicy.tsx
import React, { useEffect, useRef, useState } from "react";
import { Layout, Menu, theme } from "antd";
import type { MenuProps } from "antd";
import Logo from "../assets/app_logo.png";
import { Link } from "react-router-dom";
import "../components/PrivacyPolicy/privacyPolicy.css";

const { Header, Content, Sider } = Layout;

// Header menu: keep “Privacy Policy” tab intact
const items1: MenuProps["items"] = [
  { key: "privacy", label: "Privacy Policy" },
];

// Sidebar sections
const sections: { id: string; label: string }[] = [
  { id: "privacy-policy", label: "Privacy Policy" },
  { id: "owner-and-data-controller", label: "Owner & Data Controller" },
  { id: "what-information-do-we-collect", label: "What Information Do We Collect?" },
  { id: "media-access", label: "Media Access" },
  { id: "non-personal-information", label: "Non-Personal Information" },
  { id: "data-usage", label: "Data Usage" },
  { id: "data-storage", label: "Data Storage" },
  { id: "third-party-services", label: "Third-Party Services" },
  { id: "user-rights-and-control", label: "User Rights & Control" },
  { id: "security", label: "Security" },
  { id: "childrens-privacy", label: "Children’s Privacy" },
  { id: "policy-updates", label: "Policy Updates" },
  { id: "contact-us", label: "Contact Us" },
];

const items2: MenuProps["items"] = sections.map((sec) => ({
  key: sec.id,
  label: sec.label,
}));

const PrivacyPolicy: React.FC = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const [activeKey, setActiveKey] = useState<string>(sections[0].id);
  const observer = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const headingEls = sections
      .map((sec) => document.getElementById(sec.id))
      .filter(Boolean) as HTMLElement[];

    observer.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveKey(entry.target.id);
        });
      },
      { root: null, rootMargin: "-64px 0px -60% 0px", threshold: 0.1 }
    );

    headingEls.forEach((el) => observer.current?.observe(el));
    return () => headingEls.forEach((el) => observer.current?.unobserve(el));
  }, []);

  const handleMenuClick: MenuProps["onClick"] = ({ key }) => {
    const target = document.getElementById(key);
    if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const year = new Date().getFullYear();

  return (
    <Layout style={{ height: "100vh" }}>
      <Header
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          background: colorBgContainer,
          display: "flex",
          alignItems: "center",
          padding: "0 24px",
          flexWrap: "wrap", // allow wrapping on narrow screens
          minHeight: 64,
        }}
      >
        {/* Logo Container (two logos side by side) */}
        <div className="flex items-center">
         <Link
          to="/"
          onClick={() => window.scrollTo(0, 0)}
          className="flex items-center"
        >
          <img
            src={Logo}
            alt="Engineers at AKTU Logo"
            className="h-8 sm:h-10 w-auto"
            loading="lazy"
          />
          <h1 className="ml-4 text-xl sm:text-xl font-semibold text-[#4A5BFD]">
            Engineers at AKTU
          </h1>
        </Link>
        </div>

        {/* “Privacy Policy” menu, forced onto its own flex segment */}
        <div style={{ flex: 1, minWidth: 0 }}>
          <Menu
            theme="light"
            mode="horizontal"
            defaultSelectedKeys={["privacy"]}
            items={items1}
            className="pl-4 font-medium font-montserrat text-sm hidden md:block lg:block"
            overflowedIndicator={null} // ensures “Privacy Policy” never collapses to “…”
          />
        </div>
      </Header>

      {/* Main layout shifted down by header height */}
      <Layout style={{ marginTop: 64 }}>
        {/* Sidebar: collapses below “lg” breakpoint, scrollable when visible */}
        <Sider
          width={240}
          breakpoint="lg"
          collapsedWidth={0}
          style={{
            background: colorBgContainer,
            position: "sticky",
            top: 64,
            height: "calc(100vh - 64px)",
            overflowY: "auto",
          }}
          className="hidden lg:block"
        >
          <Menu
            mode="inline"
            selectedKeys={[activeKey]}
            onClick={handleMenuClick}
            style={{ height: "100%", borderRight: 0 }}
            className="sidebar-menu font-montserrat"
            items={items2}
          />
        </Sider>

        <Layout>
          <Content
            style={{
              padding: "24px",
              margin: 0,
              background: colorBgContainer,
              height: "calc(100vh - 64px)",
              overflowY: "auto",
            }}
          >
            <div className="max-w-3xl mx-auto font-montserrat text-gray-800 space-y-12 py-8">
              {/* Privacy Policy */}
              <section id="privacy-policy" className="scroll-mt-8">
                <h1 className="text-3xl font-bold mb-2">
                  Privacy Policy
                </h1>
                <p className="text-gray-600 mb-6">
                  Updated: 28 June 2025
                </p>
                <p className="leading-relaxed mb-6">
                  R Cube Digital Studios built the Engineers at AKTU app as a
                  Free application. This Service is provided by R Cube Digital
                  Studios at no cost and is intended for use as is. If you
                  disagree with this policy in whole or in part, you may
                  uninstall or stop using the application at any time.
                </p>
              </section>

              {/* Owner & Data Controller */}
              <section id="owner-and-data-controller" className="scroll-mt-8">
                <h2 className="text-2xl font-bold mb-2">
                  Owner & Data Controller
                </h2>
                <ul className="list-disc pl-5 leading-relaxed mb-6">
                  <li>R Cube Digital Studios</li>
                  <li>connect2rcubedigitalstudio@gmail.com</li>
                  <li>engineersataktu@gmail.com</li>
                </ul>
              </section>

              {/* What Information Do We Collect? */}
              <section
                id="what-information-do-we-collect"
                className="scroll-mt-8"
              >
                <h2 className="text-2xl font-bold mb-2">
                  What Information Do We Collect?
                </h2>
                <ul className="list-disc pl-5 leading-relaxed mb-6">
                  <li>Name</li>
                  <li>College Name</li>
                  <li>Academic Year</li>
                  <li>Branch</li>
                  <li>Email address</li>
                  <li>Profile photo (optional, encrypted)</li>
                </ul>
                <p className="leading-relaxed mb-6">
                  No location or biometric data is collected. Some data is
                  stored locally via SharedPreferences or Room Database.
                </p>
              </section>

              {/* Media Access */}
              <section id="media-access" className="scroll-mt-8">
                <h2 className="text-2xl font-bold mb-2">Media Access</h2>
                <p className="leading-relaxed mb-6">
                  Used only for profile photo upload, stored securely in
                  encrypted form.
                </p>
              </section>

              {/* Non-Personal Information */}
              <section
                id="non-personal-information"
                className="scroll-mt-8"
              >
                <h2 className="text-2xl font-bold mb-2">
                  Non-Personal Information
                </h2>
                <p className="leading-relaxed mb-6">
                  No device model or OS data is collected directly. However,
                  Firebase and ad networks may collect such data automatically.
                </p>
              </section>

              {/* Data Usage */}
              <section id="data-usage" className="scroll-mt-8">
                <h2 className="text-2xl font-bold mb-2">Data Usage</h2>
                <ul className="list-disc pl-5 leading-relaxed mb-6">
                  <li>Improve performance</li>
                  <li>Bug tracking via Firebase</li>
                  <li>App analytics</li>
                  <li>Notification personalization</li>
                  <li>Optional promotional emails</li>
                </ul>
              </section>

              {/* Data Storage */}
              <section id="data-storage" className="scroll-mt-8">
                <h2 className="text-2xl font-bold mb-2">Data Storage</h2>
                <p className="leading-relaxed mb-6">
                  Data is stored online in encrypted form via Firebase. Some
                  settings/preferences are saved locally.
                </p>
              </section>

              {/* Third-Party Services */}
              <section id="third-party-services" className="scroll-mt-8">
                <h2 className="text-2xl font-bold mb-2">
                  Third-Party Services
                </h2>
                <p className="leading-relaxed mb-6">
                  The app uses:
                </p>
                <ul className="list-disc pl-5 leading-relaxed mb-6">
                  <li>Firebase</li>
                  <li>AdMob</li>
                  <li>YouTube, Instagram, LinkedIn, Google Drive (external links)</li>
                </ul>
                <p className="leading-relaxed mb-6">
                  Each third-party provider has its own privacy policy.
                </p>
              </section>

              {/* User Rights & Control */}
              <section id="user-rights-and-control" className="scroll-mt-8">
                <h2 className="text-2xl font-bold mb-2">
                  User Rights & Control
                </h2>
                <p className="leading-relaxed mb-6">
                  Users can view data within the app. To delete data, contact:
                  engineersataktu@gmail.com. Requests are handled within 14
                  working days.
                </p>
              </section>

              {/* Security */}
              <section id="security" className="scroll-mt-8">
                <h2 className="text-2xl font-bold mb-2">Security</h2>
                <p className="leading-relaxed mb-6">
                  Data is encrypted and access is restricted. While we strive to
                  protect your data, no method is 100% secure.
                </p>
              </section>

              {/* Children’s Privacy */}
              <section id="childrens-privacy" className="scroll-mt-8">
                <h2 className="text-2xl font-bold mb-2">
                  Children’s Privacy
                </h2>
                <p className="leading-relaxed mb-6">
                  The app is not intended for children under 13. We do not
                  knowingly collect data from children.
                </p>
              </section>

              {/* Policy Updates */}
              <section id="policy-updates" className="scroll-mt-8">
                <h2 className="text-2xl font-bold mb-2">Policy Updates</h2>
                <p className="leading-relaxed mb-6">
                  Changes will be announced via email, in-app notifications, and
                  at{" "}
                  <a
                    href="https://www.engineersataktu.in"
                    className="text-blue-600 hover:underline"
                  >
                    www.engineersataktu.in
                  </a>
                  .
                </p>
              </section>

              {/* Contact Us */}
              <section id="contact-us" className="scroll-mt-8">
                <h2 className="text-2xl font-bold mb-2">Contact Us</h2>
                <ul className="list-disc pl-5 leading-relaxed">
                  <li>connect2rcubedigitalstudio@gmail.com</li>
                  <li>engineersataktu@gmail.com</li>
                </ul>
              </section>

              {/* Bottom copyright */}
              <div className="mt-16 border-t border-gray-300 pt-6">
                <p className="text-center text-gray-600 text-sm font-medium">
                  © {year} R Cube Digital Studios. All rights reserved.
                </p>
              </div>
            </div>
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default PrivacyPolicy;
