import React from "react";

const HeadDash = () => {
  return (
    <div>
      <div>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, user-scalable=no, minimum-scale=1.0, maximum-scale=1.0"
        />
        <meta name="csrf-token" content="{{ csrf_token() }}" />
        <title>Dash</title>
        <meta name="description" content />
        {/* Favicon */}
        <link
          rel="icon"
          type="image/x-icon"
          href="{{ asset('images/favicon.png') }}"
        />
        {/* Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Public+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap"
          rel="stylesheet"
        />
        {/* Icons. Uncomment required icon fonts */}
        <link
          rel="stylesheet"
          href="http://staging.cswebsolutions.ca/admin_penal/sneat/assets/vendor/fonts/boxicons.css"
        />

        {/* Core CSS */}
        {/* <link
          rel="stylesheet"
          href="http://staging.cswebsolutions.ca/admin_penal/sneat/assets/vendor/css/core.css"
          className="template-customizer-core-css"
        /> */}
        {/* <link rel="stylesheet" href={`${process.env.REACT_APP_IMG_URL}/src/admin/theme-default.css`} />
        <link rel="stylesheet" href="../../admin/assets/theme-default.css" /> */}

        {/* Vendors CSS */}
        <link
          rel="stylesheet"
          href="http://staging.cswebsolutions.ca/admin_penal/sneat/assets/vendor/libs/perfect-scrollbar/perfect-scrollbar.css"
        />

        {/* Page CSS */}
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/datatables/1.10.21/js/jquery.dataTables.min.js"
          rel="stylesheet"
        />
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/datatables.net-bs4/3.2.2/dataTables.bootstrap4.min.js"
          rel="stylesheet"
        />
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/datatables.net-buttons-dt/2.2.3/buttons.dataTables.min.js"
          rel="stylesheet"
        />
        {/* Sweetalert CSS START*/}

        {/* Sweetalert CSS END */}
        {/* Helpers */}
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/toastr.css"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css"
        />
        {/*! Template customizer & Theme config files MUST be included after core stylesheets and helpers.js in the <head> section */}
        {/*? Config:  Mandatory theme config file contain global vars & default theme options, Set your preferred theme option in this file.  */}
      </div>
    </div>
  );
};

export default HeadDash;
