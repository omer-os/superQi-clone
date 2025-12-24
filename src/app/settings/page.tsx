import React from 'react'
import SharedNav from '../../components/shared/shared-nav'

export default function SettingsPage() {
  return (
    <div className="flex flex-col gap-4">
      <SharedNav title="Settings">
        {/* Add your settings-specific right-side content here */}
      </SharedNav>
      {/* Add your settings page content here */}
    </div>
  );
}
