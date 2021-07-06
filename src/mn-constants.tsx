export const PHOENIX_SOCKET_ENDPOINT = process.env.REACT_APP_PHOENIX_SOCKET_ENDPOINT;
export const GRAPHQL_ENDPOINT = process.env.REACT_APP_GRAPHQL_ENDPOINT;
export const NODE_ENV = process.env.NODE_ENV;
export const PUBLIC_URL = process.env.PUBLIC_URL;
export const SENTRY_KEY = process.env.REACT_APP_SENTRY_API_KEY;
export const DEFAULT_PAGE_SIZE = parseInt(`${process.env.REACT_APP_DEFAULT_PAGE_SIZE}`) || 15;

export const APP_NAME = 'Reflow';
export const INSTANCE_DESCRIPTION = 'Federated economic network for Reflow pilots';
export const INVITE_ONLY_TEXT =
  process.env.REACT_APP_INVITE_ONLY_TEXT ||
  'Please note, signups on this instance are currently invite-only.';
export const INSTANCE_TAGLINE = 'Co-creating circular and regenerative resource flows in cities';
export const INSTANCE_PROMPT =
  "You don't need to sign up to preview what people are sharing and discussing publicly.";
export const prompt_signin = 'Sign in';
export const my_timeline = 'My Timeline';
export const instance_bg_img =
  'https://reflowproject.eu/wp-content/uploads/2019/08/reflow-cocreation-1.png';
export const logo_large_url =
  'https://raw.githubusercontent.com/reflow-project/zenpub-client/main/src/static/img/weloop_logo_1200x512.png';
export const logo_small_url =
  'https://raw.githubusercontent.com/reflow-project/zenpub-client/main/src/static/img/weloop_logo_128x128-01.png';

export const terms_markdown_text = {
  // replace the text as needed
  terms_users: 'This is a test instance. Your data is not secure or private.',
  terms_cookies: 'This site uses cookies.',
  terms_indexing:
    'Information you post on this site may be publicly available and will be copied onto other servers in the federated network.'
};

export const terms_markdown_urls = {
  // replace the URLs as needed, or enable/disable to use `terms_markdown_text` instead
  enabled: false,
  terms_users: 'https://moodle.net/terms/users.md',
  terms_cookies: 'https://moodle.net/terms/cookies.md',
  terms_indexing: 'https://moodle.net/terms/indexing.md'
};

export const terms_privacy = {
  // replace the URLs as needed, or enable/disable to use `text_markdown` instead
  enabled: true,
  // replace the URL with that of your instance's privacy policy (in markdown format)
  url_markdown: 'https://moodle.net/terms/privacy.md',
  // replace the text as needed (in markdown format as well)
  text_markdown:
    'This site uses cookies and follows GDPR rules. Contact the instance operators if you want your data exported or deleted.'
};

export const related_urls = {
  // replace the URLs as needed
  project_homepage: 'https://os.reflowproject.eu',
  code: 'https://github.com/reflowproject',
  feedback: 'https://os.reflowproject.eu'
};

export const IS_DEV = NODE_ENV === 'development';

export type LocaleDef = { code: string; desc: string; rtl: boolean };

export const locales: LocaleDef[] = [
  { code: 'en_GB', desc: 'English, British', rtl: false },
  { code: 'en_US', desc: 'English, USA', rtl: false },
  { code: 'es_MX', desc: 'Español, Méjico', rtl: false },
  { code: 'es_ES', desc: 'Español, España', rtl: false },
  { code: 'fr_FR', desc: 'Français, France', rtl: false },
  { code: 'eu', desc: 'Euskara', rtl: false },
  { code: 'ar_SA', desc: 'العربية, المملكة العربية السعودية', rtl: true }
];

export const languages = {
  en_GB: 'English, British',
  en_US: 'English, USA',
  es_MX: 'Español, Méjico',
  es_ES: 'Español, España',
  fr_FR: 'Français, France',
  eu: 'Euskara',
  ar_SA: 'العربية, المملكة العربية السعودية'
};
export type LocaleKey = keyof typeof languages;
// export const locales = Object.keys(languages) as LocaleKey[];

const mothershipAppId = process.env.REACT_APP_MOTHERSHIP_API_ID;
const mothershipApiKey = process.env.REACT_APP_MOTHERSHIP_API_KEY;
const mothershipEnv = process.env.REACT_APP_MOTHERSHIP_ENV;

export const mothershipCreds =
  mothershipAppId && mothershipApiKey
    ? {
        appId: mothershipAppId,
        apiKey: mothershipApiKey,
        indexName: mothershipEnv
      }
    : null;

export const searchDisabled = !mothershipAppId || !mothershipApiKey;
export const USERNAME_REGEX = /^[a-zA-Z][a-zA-Z0-9-]{2,}$/;
export const EMAIL_REGEX = /^.+@.+\..+$/;
export const DOMAIN_REGEX = /^.+\..+$/;

export const max_file_size = '10MB';

export const accepted_file_types =
  '.pdf, .rtf, .docx, .doc, .odt, .ott, .xls, .xlsx, .ods, .ots, .csv, .ppt, .pps, .pptx, .odp, .otp, .odg, .otg, .odc, .ogg, .mp3, .flac, .m4a, .wav, .mp4, .mkv, .flv, .avi, .gif, .jpg, .jpeg, .png, .svg, .webm, .eps, .tex, .mbz';

// these licenses must match the icons (in the same order) configured in the UploadResource UI module
// please use standard identifiers from https://spdx.org/licenses/preview/ in order to preserve interoperability
export const accepted_license_types = ['CC0-1.0', 'CC-BY-4.0', 'CC-BY-SA-4.0'];

export const nord = {
  // Main
  app: '#2E3440',
  appInverse: '#3B4252',
  primary: '#BF616A',
  secondary: '#D08770',
  tertiary: '#EBCB8B',

  // Status
  positive: '#2db783',
  negative: '#ff5a5f',
  warning: '#ffebb3',

  // Monochrome
  lightest: '#333333',
  lighter: '#444444',
  light: '#666666',
  mediumlight: '#999999',
  medium: '#D1D3D8',
  mediumdark: '#EEEEEE',
  dark: '#F3F3F3',
  darker: '#F8F8F8',
  darkest: '#FFFFFF',
  border: '1px solid #2E3440'
};

export const colors = {
  // Reflow
  app: 'rgb(245, 246, 247)',
  appInverse: '#fff',
  primary: '#05244F',
  secondary: '#02e379',
  tertiary: '#D1D3D8',

  // Status
  positive: '#2db783',
  negative: '#ff5a5f',
  warning: '#ffebb3',

  // Monochrome
  lightest: '#FFFFFF',
  lighter: '#F8F8F8',
  light: '#F3F3F3',
  mediumlight: '#EEEEEE',
  medium: '#D1D3D8',
  mediumdark: '#999999',
  dark: '#666666',
  darker: '#444444',
  darkest: '#333333',
  border: '1px solid #F3F3F3'
};

export const typography = {
  type: {
    primary: '"Barlow", "Open Sans", sans-serif'
  },
  size: {
    s1: '12px',
    s2: '14px',
    s3: '16px',
    m1: '20px',
    m2: '24px',
    m3: '28px',
    l1: '32px',
    l2: '40px',
    l3: '48px',
    code: '90px'
  }
};

/* log ENV if DEV */
IS_DEV &&
  console.log(`-environment-
${Object.keys(process.env)
  .map(key => `${key}=${process.env[key]}`)
  .join('\n')}
-------------
`);
/***/
