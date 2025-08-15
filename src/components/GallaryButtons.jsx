import React from 'react';

/**
 * A reusable button component styled with Tailwind CSS based on the provided design.
 * The width is responsive and "hugs" the content inside it.
 *
 * @param {object} props - The component props.
 * @param {React.ReactNode} props.children - The content to be displayed inside the button (e.g., text, an icon).
 * @param {() => void} [props.onClick] - Optional click handler function.
 */
const StyledButton = ({ children, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="
        /* --- Layout & Sizing --- */
        inline-flex           /* Use inline-flex for horizontal alignment of children */
        items-center          /* Vertically center content */
        justify-center        /* Horizontally center content */
        h-[54px]              /* Fixed height as specified */
        box-border            /* Ensures padding and border are included in the height */

        /* --- Spacing --- */
        py-[14px]             /* Top & bottom padding */
        px-5                  /* Left & right padding (20px) */
        gap-[10px]            /* Space between children (e.g., icon and text) */

        /* --- Appearance --- */
        bg-white              /* Background color */
        border-2              /* Border width */
        border-slate-900      /* Border color (added for visibility) */
        rounded-lg            /* Border radius (8px) */

        /* --- Typography --- */
        font-sans             /* Example font family */
        font-semibold         /* Example font weight */
        text-slate-900        /* Text color */
        whitespace-nowrap     /* Prevents text from wrapping to a new line */

        /* --- Interaction --- */
       
        hover:bg-slate-100    /* Background color on hover */
     
      "
    >
      {children}
    </button>
  );
};

// --- Example Usage ---

// This would typically be your main App component or another page component.
export default function ButtonShowcase() {
  return (
    <div className="flex flex-wrap items-center gap-4 p-6 bg-[#FFF5F0]">
      {/* 
        Here are six instances of the button.
        Notice how their widths adapt to the length of the text.
      */}
      <StyledButton >All</StyledButton>
      <StyledButton>Class Rooms</StyledButton>
      <StyledButton>Library</StyledButton>
      <StyledButton>Science Lab</StyledButton>
      <StyledButton>Computer lab</StyledButton>
      <StyledButton>Garden and Nature Area</StyledButton>
    </div>
  );
}