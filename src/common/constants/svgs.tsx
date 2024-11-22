// components start with A

import { cn } from "@/lib/utils";

export const ArrowLeft = ({
  className = "text-black-700",
}: {
  className?: string;
}) => (
  <svg
    className={cn("w-6 h-6", className)}
    aria-hidden="true"
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    fill="none"
    viewBox="0 0 24 24"
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="m15 19-7-7 7-7"
    />
  </svg>
);

export const ChartSvg = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    className={className}
  >
    <path
      d="M16 6L18.29 8.29L13.41 13.17L9.41 9.17L2 16.59L3.41 18L9.41 12L13.41 16L19.71 9.71L22 12V6H16Z"
      fill="#00B69B"
    />
  </svg>
);

export const CustomerSvg = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="60"
    height="60"
    viewBox="0 0 60 60"
    fill="none"
    className={className}
  >
    <path
      opacity="0.21"
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M0 30V37C0 49.7025 10.2975 60 23 60H30H37C49.7025 60 60 49.7025 60 37V30V23C60 10.2975 49.7025 0 37 0H30H23C10.2975 0 0 10.2975 0 23V30Z"
      fill="#8280FF"
    />
    <path
      opacity="0.587821"
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M20.666 23.3333C20.666 26.2789 23.0538 28.6667 25.9993 28.6667C28.9449 28.6667 31.3327 26.2789 31.3327 23.3333C31.3327 20.3878 28.9449 18 25.9993 18C23.0538 18 20.666 20.3878 20.666 23.3333ZM33.9993 28.6667C33.9993 30.8758 35.7902 32.6667 37.9993 32.6667C40.2085 32.6667 41.9993 30.8758 41.9993 28.6667C41.9993 26.4575 40.2085 24.6667 37.9993 24.6667C35.7902 24.6667 33.9993 26.4575 33.9993 28.6667Z"
      fill="#8280FF"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M25.9778 31.333C19.6826 31.333 14.5177 34.5684 14.0009 40.9319C13.9727 41.2786 14.6356 41.9997 14.97 41.9997H36.9956C37.9972 41.9997 38.0128 41.1936 37.9972 40.933C37.6065 34.3906 32.3616 31.333 25.9778 31.333ZM45.2746 41.9997L40.1333 41.9997C40.1333 38.9984 39.1417 36.2288 37.4683 34.0005C42.0103 34.0501 45.7189 36.3465 45.998 41.1997C46.0092 41.3951 45.998 41.9997 45.2746 41.9997Z"
      fill="#8280FF"
    />
  </svg>
);

export const ProductSvg = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="60"
    height="60"
    viewBox="0 0 60 60"
    fill="none"
    className={className}
  >
    <path
      opacity="0.21"
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M0 30V37C0 49.7025 10.2975 60 23 60H30H37C49.7025 60 60 49.7025 60 37V30V23C60 10.2975 49.7025 0 37 0H30H23C10.2975 0 0 10.2975 0 23V30Z"
      fill="#FEC53D"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M15 24.3162L27.9005 31.7643C28.0394 31.8445 28.1851 31.9024 28.3333 31.9392V46.3844L15.9201 39.0382C15.3498 38.7007 15 38.0873 15 37.4246V24.3162ZM45 24.1182V37.4246C45 38.0873 44.6502 38.7007 44.0799 39.0382L31.6667 46.3844V31.8126C31.6969 31.7975 31.7269 31.7814 31.7566 31.7643L45 24.1182V24.1182Z"
      fill="#FEC53D"
    />
    <path
      opacity="0.499209"
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M15.4043 20.7014C15.5619 20.5024 15.7608 20.3343 15.9926 20.2108L29.1176 13.2201C29.6686 12.9266 30.3295 12.9266 30.8805 13.2201L44.0055 20.2108C44.1843 20.306 44.3434 20.4277 44.4791 20.5697L30.089 28.8778C29.9943 28.9325 29.9071 28.995 29.8276 29.064C29.7481 28.995 29.6609 28.9325 29.5662 28.8778L15.4043 20.7014Z"
      fill="#FEC53D"
    />
  </svg>
);

export const OrderSvg = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="60"
    height="60"
    viewBox="0 0 60 60"
    fill="none"
    className={className}
  >
    <path
      opacity="0.21"
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M0 30V37C0 49.7025 10.2975 60 23 60H30H37C49.7025 60 60 49.7025 60 37V30V23C60 10.2975 49.7025 0 37 0H30H23C10.2975 0 0 10.2975 0 23V30Z"
      fill="#4AD991"
    />
    <path
      d="M19.1111 40.8889H42.4444C43.3036 40.8889 44 41.5853 44 42.4444C44 43.3036 43.3036 44 42.4444 44H17.5556C16.6964 44 16 43.3036 16 42.4444V17.5556C16 16.6964 16.6964 16 17.5556 16C18.4147 16 19.1111 16.6964 19.1111 17.5556V40.8889Z"
      fill="#4AD991"
    />
    <path
      opacity="0.5"
      d="M24.9131 34.175C24.3255 34.8017 23.3411 34.8335 22.7143 34.2459C22.0876 33.6583 22.0558 32.6739 22.6434 32.0472L28.4767 25.8249C29.045 25.2188 29.9893 25.1662 30.6213 25.7056L35.2253 29.6343L41.224 22.0361C41.7563 21.3618 42.7345 21.2467 43.4088 21.779C44.0831 22.3114 44.1982 23.2895 43.6658 23.9638L36.6658 32.8305C36.1191 33.5231 35.1063 33.6227 34.4351 33.0499L29.7311 29.0358L24.9131 34.175Z"
      fill="#4AD991"
    />
  </svg>
);

export const DueSvg = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="60"
    height="60"
    viewBox="0 0 60 60"
    fill="none"
    className={className}
  >
    <path
      opacity="0.21"
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M0 30V37C0 49.7025 10.2975 60 23 60H30H37C49.7025 60 60 49.7025 60 37V30V23C60 10.2975 49.7025 0 37 0H30H23C10.2975 0 0 10.2975 0 23V30Z"
      fill="#80F7FF"
    />
    <path
      d="M30 24V25.5"
      stroke="#00CBE1"
      stroke-width="1.4"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M30 36V34.5"
      stroke="#00CBE1"
      stroke-width="1.4"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M32.9844 27.6C32.9064 26.4288 31.9404 25.5 30.75 25.5H29.106C27.942 25.5 27 26.4432 27 27.606C27 28.572 27.6576 29.4144 28.5936 29.6496L31.4052 30.3552C32.3424 30.5904 32.9988 31.4328 32.9988 32.3988C32.9988 33.5628 32.0556 34.5048 30.8928 34.5048H29.2488C28.056 34.5048 27.09 33.5736 27.0132 32.4"
      stroke="#00CBE1"
      stroke-width="1.4"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M30 41.25C23.7868 41.25 18.75 36.2132 18.75 30C18.75 23.7868 23.7868 18.75 30 18.75C36.2132 18.75 41.25 23.7868 41.25 30C41.25 36.2132 36.2132 41.25 30 41.25Z"
      stroke="#00CBE1"
      stroke-width="1.5"
    />
  </svg>
);
