import React from "react";
import SharedNav from '../../components/shared/shared-nav'

export default function Page() {
  return (
    <div className="flex flex-col gap-4">
      <SharedNav title="Apps">
        {/* Add your apps-specific right-side content here */}
      </SharedNav>
      {/* Add your apps page content here */}
    </div>
  );
}
