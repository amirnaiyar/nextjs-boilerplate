import { Global, css } from '@emotion/react';
import { theme } from 'theme';

const GlobalStyles: React.FunctionComponent<{ cssString?: string }> = ({
  cssString = '',
}) => {
  return (
    <Global
      styles={css`
        /* http://meyerweb.com/eric/tools/css/reset/
          v2.0-modified | 20110126
          License: none (public domain)
        */
        html,
        body,
        div,
        span,
        applet,
        object,
        iframe,
        h1,
        h2,
        h3,
        h4,
        h5,
        h6,
        p,
        blockquote,
        pre,
        a,
        abbr,
        acronym,
        address,
        big,
        cite,
        code,
        del,
        dfn,
        em,
        img,
        ins,
        kbd,
        q,
        s,
        samp,
        small,
        strike,
        strong,
        sub,
        sup,
        tt,
        var,
        b,
        u,
        i,
        center,
        dl,
        dt,
        dd,
        ol,
        ul,
        li,
        fieldset,
        form,
        label,
        legend,
        table,
        caption,
        tbody,
        tfoot,
        thead,
        tr,
        th,
        td,
        article,
        aside,
        canvas,
        details,
        embed,
        figure,
        figcaption,
        footer,
        header,
        hgroup,
        menu,
        nav,
        output,
        ruby,
        section,
        summary,
        time,
        mark,
        audio,
        video {
          margin: 0;
          padding: 0;
          border: 0;
          font-size: 100%;
          vertical-align: baseline;
        }
        a:focus {
          outline: none!important;
      }
        /* make sure to set some focus styles for accessibility */
        :focus {
          outline: 0;
        }

        /* HTML5 display-role reset for older browsers */
        article,
        aside,
        details,
        figcaption,
        figure,
        footer,
        header,
        hgroup,
        menu,
        nav,
        p,
        section {
          display: block;
        }

        body {
          font-family:  ${theme.fonts.secondary};
          font-size: 14px;
          line-height: 1;
          background: #040910;
          overscroll-behavior: none;
          position: relative;
          overflow-y:auto;
          overflow-x:hidden;
          color:${theme.colors.white};

          @media only screen and (min-width: 600px) {
            margin: 0;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
            min-height: 100vh;
            min-width: 100vw;
            -webkit-background-size: cover;
            -moz-background-size: cover;
            -o-background-size: cover;
            background-size: cover;
          }
        }
        a{
          text-decoration:none;
          color:${theme.colors.white};
          cursor: pointer;
        }

        blockquote,
        q {
          quotes: none;
        }

        blockquote:before,
        blockquote:after,
        q:before,
        q:after {
          content: "";
          content: none;
        }

        table {
          border-collapse: collapse;
          border-spacing: 0;
        }

        input[type="search"]::-webkit-search-cancel-button,
        input[type="search"]::-webkit-search-decoration,
        input[type="search"]::-webkit-search-results-button,
        input[type="search"]::-webkit-search-results-decoration {
          -webkit-appearance: none;
          -moz-appearance: none;
        }

        input[type="search"] {
          -webkit-appearance: none;
          -moz-appearance: none;
          -webkit-box-sizing: content-box;
          -moz-box-sizing: content-box;
          box-sizing: content-box;
        }

        textarea {
          overflow: auto;
          vertical-align: top;
          resize: vertical;
        }

        /**
        * Correct 'inline-block' display not defined in IE 6/7/8/9 and Firefox 3.
        */

        audio,
        canvas,
        video {
          display: inline-block;
          *display: inline;
          *zoom: 1;
          max-width: 100%;
        }

        /**
          * Prevent modern browsers from displaying 'audio' without controls.
          * Remove excess height in iOS 5 devices.
        */

        audio:not([controls]) {
          display: none;
          height: 0;
        }

        /**
        * Address styling not present in IE 7/8/9, Firefox 3, and Safari 4.
        * Known issue: no IE 6 support.
        */

        [hidden] {
          display: none;
        }

        #fc_frame{
          max-width: ${theme.maxDesktopLayoutWidth}px;
          right:50% !important;
          bottom:-20px !important;
          margin-right:  calc(min(100%,${theme.maxDesktopLayoutWidth + 20}px) / -2);
          @media(max-width: ${theme.breakpoints[0]}) {
            max-width:100%;
          }
        }

        /**
        * 1. Correct text resizing oddly in IE 6/7 when body 'font - size' is set using
        *    'em' units.
        * 2. Prevent iOS text size adjust after orientation change, without disabling
        *    user zoom.
        */

        html {
          font-size: 100%; /* 1 */
          -webkit-text-size-adjust: 100%; /* 2 */
          -ms-text-size-adjust: 100%; /* 2 */
          scroll-behavior: smooth;

        }

        /**
        * Address 'outline' inconsistency between Chrome and other browsers.
        */

        a:focus {
          outline: thin dotted;
        }

        /**
          * Improve readability when focused and also mouse hovered in all browsers.
          */

        a:active,
        a:hover {
          outline: 0;
        }

        /**
        * 1. Remove border when inside 'a' element in IE 6/7/8/9 and Firefox 3.
        * 2. Improve image quality when scaled in IE 7.
        */

        img {
          border: 0; /* 1 */
          -ms-interpolation-mode: bicubic; /* 2 */
        }

        /**
        * Address margin not present in IE 6/7/8/9, Safari 5, and Opera 11.
        */

        figure {
          margin: 0;
        }

        /**
          * Correct margin displayed oddly in IE 6/7.
        */

        form {
          margin: 0;
        }

        /**
          * Define consistent border, margin, and padding.
        */

        fieldset {
          border: 1px solid #c0c0c0;
          margin: 0 2px;
          padding: 0.35em 0.625em 0.75em;
        }

        /**
          * 1. Correct color not being inherited in IE 6/7/8/9.
          * 2. Correct text not wrapping in Firefox 3.
          * 3. Correct alignment displayed oddly in IE 6/7.
        */

        legend {
          border: 0; /* 1 */
          padding: 0;
          white-space: normal; /* 2 */
          *margin-left: -7px; /* 3 */
        }

        /**
          * 1. Correct font size not being inherited in all browsers.
          * 2. Address margins set differently in IE 6/7, Firefox 3+, Safari 5,
          *    and Chrome.
          * 3. Improve appearance and consistency in all browsers.
        */

        button,
        input,
        select,
        textarea {
          font-size: 100%; /* 1 */
          margin: 0; /* 2 */
          vertical-align: baseline; /* 3 */
          *vertical-align: middle; /* 3 */
        }

        /**
          * Address Firefox 3+ setting 'line - height' on 'input' using '!important' in
          * the UA stylesheet.
        */

        button,
        input {
          line-height: normal;
        }

        /**
          * Address inconsistent 'text - transform' inheritance for 'button' and 'select'.
          * All other form control elements do not inherit 'text - transform' values.
          * Correct 'button' style inheritance in Chrome, Safari 5+, and IE 6+.
          * Correct 'select' style inheritance in Firefox 4+ and Opera.
          */

        button,
        select {
          text-transform: none;
        }

        /**
          * 1. Avoid the WebKit bug in Android 4.0.* where (2) destroys native 'audio'
          *    and 'video' controls.
          * 2. Correct inability to style clickable 'input' types in iOS.
          * 3. Improve usability and consistency of cursor style between image-type
          *    'input' and others.
          * 4. Remove inner spacing in IE 7 without affecting normal text inputs.
          *    Known issue: inner spacing remains in IE 6.
        */

        button,
        html input[type="button"], /* 1 */
        input[type="reset"],
        input[type="submit"] {
          -webkit-appearance: button; /* 2 */
          cursor: pointer; /* 3 */
          *overflow: visible; /* 4 */
        }

        /**
          * Re-set default cursor for disabled elements.
        */

        button[disabled],
        html input[disabled] {
          cursor: not-allowed;
        }

        /**
          * 1. Address box sizing set to content-box in IE 8/9.
          * 2. Remove excess padding in IE 8/9.
          * 3. Remove excess padding in IE 7.
          *    Known issue: excess padding remains in IE 6.
        */

        input[type="checkbox"],
        input[type="radio"] {
          box-sizing: border-box; /* 1 */
          padding: 0; /* 2 */
          *height: 13px; /* 3 */
          *width: 13px; /* 3 */
        }

        /**
        * 1. Address 'appearance' set to 'searchfield' in Safari 5 and Chrome.
        * 2. Address 'box - sizing' set to 'border - box' in Safari 5 and Chrome
        *    (include '- moz' to future-proof).
        */

        input[type="search"] {
          -webkit-appearance: textfield; /* 1 */
          -moz-box-sizing: content-box;
          -webkit-box-sizing: content-box; /* 2 */
          box-sizing: content-box;
        }

        /**
          * Remove inner padding and search cancel button in Safari 5 and Chrome
          * on OS X.
        */

        input[type="search"]::-webkit-search-cancel-button,
        input[type="search"]::-webkit-search-decoration {
          -webkit-appearance: none;
        }

        /**r
        * Remove inner padding and border in Firefox 3+.
        */



        /**
        * 1. Remove default vertical scrollbar in IE 6/7/8/9.
        * 2. Improve readability and alignment in all browsers.
        */

        textarea {
          overflow: auto; /* 1 */
          vertical-align: top; /* 2 */
        }

        /**
        * Remove most spacing between table cells.
        */

        table {
          border-collapse: collapse;
          border-spacing: 0;
        }

        html,
        button,
        input,
        select,
        textarea {
          color: #222;
        }

        select:focus{
          outline: none;
        }

        ::selection {
          background: #b3d4fc;
          text-shadow: none;
        }

        img {
          vertical-align: middle;
        }

        fieldset {
          border: 0;
          margin: 0;
          padding: 0;
        }

        textarea {
          resize: vertical;
        }

        .chromeframe {
          margin: 0.2em 0;
          background: #ccc;
          color: #000;
          padding: 0.2em 0;
        }

        *,
        *::before,
        *::after {
          box-sizing: border-box;
          word-wrap: break-word;
        }

          .clear{
            clear:both;
          }
          .cursor-pointer{
            cursor: pointer;
          }

          .Toastify__toast-body{
            font-family:  ${theme.fonts.secondary};
            font-weight: 600;
          }

          .Toastify__toast-container {
            z-index: 9999999 !important;
            @media (min-width: 600px) {
              width: auto!important;
            }
        }
          .Toastify__toast{
            max-width: ${theme.maxDesktopLayoutWidth}px;
            @media (min-width: 600px) {
              min-width: 320px;
            }
          }
          .ml-12{
            margin-left: 12px;
          }
          body.noselect {
            -webkit-touch-callout: none; /* iOS Safari */
            -webkit-user-select: none; /* Safari */
            -khtml-user-select: none; /* Konqueror HTML */
            -moz-user-select: none; /* Firefox */
            -ms-user-select: none; /* Internet Explorer/Edge */
            user-select: none; /* Non-prefixed version, currently supported by Chrome and Opera */
          }
          body.noscroll {
            overflow: hidden;
          }
          #inai-modal, .modal{
            z-index: 99999 !important;
          }
          #__next {
            @media (min-width: ${theme.breakpoints[0]}) {
              // width: ${theme.maxDesktopLayoutWidth}px;
              // margin: auto;
              border-left: 1px solid rgba(255, 255, 255, 0.1);
              border-right: 1px solid rgba(255, 255, 255, 0.1);
              min-height: 100vh;
            }
        }

          input:-webkit-autofill, input:-webkit-autofill:focus, input:-webkit-autofill:hover, select:-webkit-autofill, select:-webkit-autofill:focus, select:-webkit-autofill:hover, textarea:-webkit-autofill, textarea:-webkit-autofill:focus, textarea:-webkit-autofill:hover {
            -webkit-text-fill-color: #173C67;
            -webkit-box-shadow: 0 0 0 1000px transparent inset;
            box-shadow: inset 0 0 0 1000px transparent;
            transition: background-color 5000s ease-in-out 0s;
        }
        [data-consent-manager-dialog] > div {
          z-index: 9999999;
          align-items: flex-end;
          bottom: -10px;
          background: ${theme.colors.whites[3]};
        }
        [data-consent-manager-dialog] section {
          background-color: ${theme.colors.chineseBlack};
          color: #fff;
          max-width: 400px;
          max-height: 85vh;
          padding-top: 0px;
          border-radius: 8px 8px 0px 0px;
          @media(max-width: 576px) {
            max-width: 100vw;
            margin: 8px 0px;
          }
        }
        [data-consent-manager-dialog] section > div {
          padding: 12px 10px 0px;
        }
        [data-consent-manager-dialog] section > div button {
          display: none;
        }
        [data-consent-manager-dialog] h2 {
          color: #fff;
          font-family: ${theme.fonts.primary};
          font-weight: 700;
          font-size: 18px;
          line-height: 22px;
        }
        [data-consent-manager-dialog] table th{
          background-color: ${theme.colors.chineseBlack};
          color: #fff;
        }
        [data-consent-manager-dialog] table {
          color: #fff;
          font-size: 10px;
          line-height: 14px;
        }
        [data-consent-manager-dialog] form input {
          accent-color: ${theme.colors.primary};
        }
        [data-consent-manager-dialog] form > div {
          padding: 5px 10px 0px;
          font-size: 12px;
          line-height: 14px;
          color: ${theme.colors.whites[10]};
        }
        [data-consent-manager-dialog] form button {
          font-size: 12px;
          line-height: 20px;
          font-weight: 600;
          font-family: ${theme.fonts.primary};
          color: #fff;
        }
        [data-consent-manager-dialog] form button[type=button] {
          background-color: transparent;
          text-decoration: underline;
          box-shadow: none;
          background-image: none;
        }
        [data-consent-manager-dialog] form button[type=submit] {
          background-color: ${theme.colors.secondary};
          box-shadow: none;
          background-image: none;
          padding: 0px 25px;
          margin-right: 10px;
        }
        [data-consent-manager-dialog] form div:nth-of-type(even) {
         text-align: start;
         padding: 10px 16px 16px;
        }
        [data-consent-manager-dialog] form div:nth-of-type(even) > div {
          display: flex;
          justify-content: space-between;
        }
        [data-consent-manager-dialog] form div > div {
          margin-top: 6px;
        }
        [data-consent-manager-dialog] form thead > tr th:nth-of-type(4) {
          display: none;
        }
        [data-consent-manager-dialog] form thead > tr th {
          padding: 4px 8px;
        }
        [data-consent-manager-dialog] form tbody > tr td:nth-of-type(3) {
          display: none;
        }
        [data-consent-manager-dialog] form tbody > tr th {
          padding: 8px;
        }
        [data-consent-manager-dialog] form tbody > tr td {
          padding: 4px 4px;
          white-space: pre-wrap;
        }
        [data-consent-manager-dialog] form tbody > tr td:nth-of-type(1) {
          padding: 6px 12px;
        }
        [data-consent-manager-dialog] form tbody > tr td > p:nth-of-type(1) {
          margin-bottom: 0px !important;
        }
        [data-consent-manager-dialog] form tbody > tr:nth-of-type(3) {
          display: none;
        }
        .video-mask{
          width: 100%;
          border-radius: 20px; 
          overflow: hidden;
        }
      ${cssString}
    }
      `}
    />
  );
};

export default GlobalStyles;
