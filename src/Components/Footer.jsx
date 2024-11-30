"use client";

import Image from "next/image";

import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import Link from "next/link";

export default function Footer() {
  return (
    <footer id='#contact' className="bg-[#1E293B] text-white">
      <div className="container mx-auto px-4 py-8 md:py-12">
        {/* Top Section----------*/}

        <div className="flex items-center gap-2 mb-3 ms-2">
          <Image
            className="h-5 w-5 rounded-full"
            src="/Img/white-logo1.png"
            alt="User"
            width={30}
            height={30}
          />

          <Image
            className=" w-10 mt-1 "
            src="/Img/white-logo2.png"
            alt="User"
            width={32}
            height={32}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-6 gap-6 lg:px-2">
          {/* Contact Info----------*/}

          <div className="col-span-2 space-y-4">
            <h2 className="text-md font-bold text-teal-500">Contact Us</h2>
            <p>Logo@gmail.com</p>
            <p>+91 9558930235</p>
            <p className="">
              Lorem ipsum dolor sit amet consectetur.
              <br /> Nulla tempus elit nec.
            </p>

            {/* Social Links---------- */}
            <div className="flex space-x-4">
              <Link
                href="#"
                aria-label="Facebook"
                className="hover:text-gray-300"
              >
                <FacebookIcon />
              </Link>

              <Link
                href="#"
                aria-label="LinkedIn"
                className="hover:text-gray-300"
              >
                <LinkedInIcon />
              </Link>

              <Link
                href="#"
                aria-label="Instagram"
                className="hover:text-gray-300"
              >
                <InstagramIcon />
              </Link>
              <Link
                href="#"
                aria-label="Twitter"
                className="hover:text-gray-300"
              >
                <TwitterIcon />
              </Link>
            </div>
          </div>

          {/* Useful Links----------- */}
          <div>
            <h2 className=" font-bold text-md text-teal-500">Useful Links</h2>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="#" className="hover:underline">
                  Auctor volutpat.
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Fermentum turpis.
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Mi consequat.
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Amet venenatis.
                </Link>
              </li>

              <li>
                <Link href="#" className="hover:underline">
                  lorem Iodws.
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links----------*/}
          <div>
            <h2 className="text-md font-bold text-teal-500">
              Quick Links
            </h2>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="#" className="hover:underline">
                  Egestas vitae.
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Vivamus lorem ac.
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Eget ac tellus.
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Vulputate proin.
                </Link>
              </li>

              <li>
                <Link href="#" className="hover:underline">
                  Tanere uejen.
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal Links----------- */}
          <div>
            <h2 className="text-md font-bold text-teal-500 ">
              Legal Links
            </h2>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="#" className="hover:underline">
                  Egestas vitae.
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Vivamus lorem ac.
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Eget ac tellus.
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Vulputate proin.
                </Link>
              </li>

              <li>
                <Link href="#" className="hover:underline">
                  Tanere uejen.
                </Link>
              </li>
            </ul>
          </div>

          {/* App Links---------- */}
          <div>
            <h2 className=" text-md font-bold text-teal-500 ">Get the App</h2>
            <div className="mt-4 space-y-2">
              <Link href="#" aria-label="App Store">
                <Image
                  src="/Img/app-store.png"
                  alt="Download on App Store"
                  width={130}
                  height={100}
                />
              </Link>

              <Link href="#" aria-label="Google Play Store">
                <Image
                  className="mt-2"
                  src="/Img/google-play.png"
                  alt="Download on Google Play"
                  width={130}
                  height={100}
                />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 border-t border-gray-700 pt-4 text-center text-sm">
          <p>
            Copyright &copy; 2024. All rights reserved. Developed by{" "}
            <strong>
              {" "}
              <Link href="https://tarun-rudakiya-portfolioapp.netlify.app/">
                Tarun Rudakiya
              </Link>
            </strong>
          </p>
        </div>
      </div>
    </footer>
  );
}
