import React from "react";

export default function Footer() {
  return (
    <div className="bg-black text-white py-10">
      <div className="sideMargin space-y-20">
        <div className="grid grid-cols-6 font-light gap-8">
          <div className="col-span-2 space-y-2">
            <p className="font-semibold text-2xl">CS — Ticket System</p>
            <p className="">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>
          <div className="space-y-2">
            <p className="font-semibold text-2xl">Company</p>
            <ul className="space-y-2">
              <li className="">About Us</li>
              <li className="">Our Mission</li>
              <li className="">Contact Saled</li>
            </ul>
          </div>
          <div className="space-y-2">
            <p className="font-semibold text-2xl">Services</p>
            <ul className="space-y-2">
              <li className="">Products & Services</li>
              <li className="">Customer Stories</li>
              <li className="">Download Apps</li>
            </ul>
          </div>
          <div className="space-y-2">
            <p className="font-semibold text-2xl">Information</p>
            <ul className="space-y-2">
              <li className="">Privacy Policy</li>
              <li className="">Terms & Conditions</li>
              <li className="">Join Us</li>
            </ul>
          </div>
          <div className="space-y-2">
            <p className="font-semibold text-2xl">Social Links</p>
            <ul className="space-y-2">
              <li className="">
                <i class="fa-brands fa-x-twitter"></i> @CS — Ticket System
              </li>
              <li className="">
                <i class="fa-brands fa-linkedin"></i> @CS — Ticket System
              </li>
              <li className="">
                <i class="fa-brands fa-facebook"></i> @CS — Ticket System
              </li>
              <li className="">
                <i class="fa-solid fa-envelope"></i> support@cst.com
              </li>
            </ul>
          </div>
        </div>
        <div className="">
          <p className="justify-self-center">
            © 2026 CS — Ticket System. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}
