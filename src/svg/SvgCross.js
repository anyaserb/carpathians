const SvgCross = () => {
  return (
    <svg
      width={23}
      height={23}
      viewBox="0 0 23 23"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        y="1.41418"
        width={2}
        height={30}
        rx={1}
        transform="rotate(-45 0 1.41418)"
        fill="#2B2E2F"
      />
      <rect
        x="21.2131"
        width={2}
        height={30}
        rx={1}
        transform="rotate(45 21.2131 0)"
        fill="#2B2E2F"
      />
    </svg>
  );
};

export default SvgCross;
