"use client";
import { ArrowSquareUpRight } from "@phosphor-icons/react/dist/ssr";
import Mobile from "@/assets/images/mobile.svg";
import Desktop from "@/assets/images/desktop.svg";
import Image from "next/image";
import { useTypingEffectHook } from "@/app/hooks/useTypingEffectHook";

export const HomeContent = () => {
  return (
    <div className="w-full flex flex-col justify-between">
      <div className="w-full p-5 mt-20 flex flex-row justify-between">
        <div className="flex-1">
          <p className="text-6xl font-bold text-primary font-[family-name:var(--font-jetbrains-mono-extrabold)] leading-normal">
            FLOW TO THE INFINITY OF CREATIVITY
          </p>
        </div>
        <div className="flex-1 text-primary">
          <div className="w-full flex flex-col justify-end border-2 border-secondary border-dashed rounded-lg p-7 gap-6 text-2xl">
            <p>
              <span className="font-[family-name:var(--font-jetbrains-mono-bold)]">
                Alvaigan
              </span>{" "}
              is a{" "}
              <span className="font-[family-name:var(--font-jetbrains-mono-bold)]">
                Fullstack Developer
              </span>
              , has contributed greatly to several creative projects.
            </p>
            <div>
              <div className="flex flex-row items-center gap-1">
                <span className="font-[family-name:var(--font-jetbrains-mono-bold)]">
                  Get in touch
                </span>{" "}
                <ArrowSquareUpRight weight="fill" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-row justify-between">
        <Image
          src={Mobile}
          alt="mobile"
          width={0}
          height={0}
          className="w-auto"
        />
        <Image
          src={Desktop}
          alt="mobile"
          width={0}
          height={0}
          className="w-auto"
        />
      </div>
    </div>
  );
};
