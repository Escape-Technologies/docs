// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Escape documentation",
  tagline: "",
  url: "https://docs.escape.tech",
  baseUrl: "/",
  onBrokenLinks: "warn",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.png",

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  plugins: [
    [
      "@docusaurus/plugin-ideal-image",
      {
        max: 1030, // taille maximale de l'image redimensionnée.
        min: 640, // taille minimale de l'image redimensionnée. si celle de l'original est inférieure, utilisez cette taille.
        steps: 10, // le nombre maximum d'images générées entre min et max (inclus)
        disableInDev: false,
      },
    ],
    [
      "@docusaurus/plugin-client-redirects",
      {
        redirects: [
          { from: "/dast", to: "/" },
          { from: "/getting-started", to: "/dast/getting-started/" },
          {
            from: "/getting-started/registration",
            to: "/dast/getting-started/registration",
          },
          { from: "/getting-started", to: "/dast/getting-started/" },
          {
            from: "/getting-started/scan-results",
            to: "/dast/getting-started/scan-results",
          },
          {
            from: "/getting-started/retrieve-schema",
            to: "/dast/getting-started/retrieve-schema",
          },
          {
            from: "/getting-started/scan-your-first-app",
            to: "/dast/getting-started/scan-your-first-app",
          },
          {
            from: "/getting-started/improve-scan-coverage",
            to: "/dast/getting-started/improve-scan-coverage",
          },
          {
            from: "/getting-started/scan-scheduling",
            to: "/dast/getting-started/scan-scheduling",
          },
          { from: "/integrations", to: "/dast/integrations/" },
          { from: "/integrations/snyk", to: "/dast/integrations/snyk" },
          { from: "/integrations/email", to: "/dast/integrations/email" },
          { from: "/integrations", to: "/dast/integrations/" },
          { from: "/integrations/slack", to: "/dast/integrations/slack" },
          { from: "/integrations/pdf", to: "/dast/integrations/pdf" },
          { from: "/integrations/discord", to: "/dast/integrations/discord" },
          { from: "/integrations/kong-gw", to: "/dast/integrations/kong-gw" },
          { from: "/integrations/postman", to: "/dast/integrations/postman" },
          { from: "/custom-tests", to: "/dast/custom-tests/" },
          {
            from: "/custom-tests/Seeders",
            to: "/dast/custom-tests/Seeders",
          },
          {
            from: "/custom-tests/Mutators",
            to: "/dast/custom-tests/Mutators",
          },
          {
            from: "/custom-tests/Transformations",
            to: "/dast/custom-tests/Transformations",
          },
          {
            from: "/custom-tests/Alerting",
            to: "/dast/custom-tests/Alerting",
          },
          {
            from: "/custom-tests/Reference",
            to: "/dast/custom-tests/Reference",
          },
          {
            from: "/custom-tests/Detectors",
            to: "/dast/custom-tests/Detectors",
          },
          { from: "/authentication", to: "/dast/authentication/" },
          {
            from: "/authentication/reference",
            to: "/dast/authentication/reference/",
          },
          {
            from: "/authentication/advanced/",
            to: "/dast/authentication/advanced/",
          },
          {
            from: "/authentication/presets/",
            to: "/dast/authentication/presets/awscognito",
          },
          {
            from: "/authentication/presets/awscognito",
            to: "/dast/authentication/presets/awscognito",
          },
          {
            from: "/authentication/presets/http",
            to: "/dast/authentication/presets/http",
          },
          {
            from: "/authentication/presets/oauthclientcredentials",
            to: "/dast/authentication/presets/oauthclientcredentials",
          },
          {
            from: "/authentication/presets/basic",
            to: "/dast/authentication/presets/basic",
          },
          {
            from: "/authentication/presets/webdriver",
            to: "/dast/authentication/presets/webdriver",
          },
          {
            from: "/authentication/presets/headers",
            to: "/dast/authentication/presets/headers",
          },
          {
            from: "/authentication/presets/oauthuserpassword",
            to: "/dast/authentication/presets/oauthuserpassword",
          },
          {
            from: "/authentication/presets/curl",
            to: "/dast/authentication/presets/curl",
          },
          {
            from: "/authentication/presets/digest",
            to: "/dast/authentication/presets/digest",
          },
          {
            from: "/authentication/presets/graphql",
            to: "/dast/authentication/presets/graphql",
          },
          {
            from: "/authentication/presets/curlsequence",
            to: "/dast/authentication/presets/curlsequence",
          },
          { from: "/enterprise", to: "/dast/enterprise/" },
          { from: "/enterprise/repeater", to: "/dast/enterprise/repeater" },
          {
            from: "/enterprise/deployment-options",
            to: "/dast/enterprise/deployment-options",
          },
          { from: "/enterprise/rbac", to: "/dast/enterprise/rbac" },
          { from: "/enterprise/audit-logs", to: "/dast/enterprise/audit-logs" },
          { from: "/enterprise/sso", to: "/dast/enterprise/sso" },
          { from: "/enterprise/sla-support", to: "/dast/enterprise/sla-support" },
          {
            from: "/enterprise/rotating-encryption",
            to: "/dast/enterprise/rotating-encryption",
          },
          { from: "/vulnerabilities", to: "/dast/vulnerabilities/" },
          {
            from: "/vulnerabilities/configuration",
            to: "/dast/vulnerabilities/configuration",
          },
          {
            from: "/vulnerabilities/configuration/directory_listing",
            to: "/dast/vulnerabilities/configuration/directory_listing",
          },
          {
            from: "/vulnerabilities/configuration/error_type_inconsistency",
            to: "/dast/vulnerabilities/configuration/error_type_inconsistency",
          },
          {
            from: "/vulnerabilities/configuration/unhandled_endpoint",
            to: "/dast/vulnerabilities/configuration/unhandled_endpoint",
          },
          {
            from: "/vulnerabilities/configuration/ide_enabled",
            to: "/dast/vulnerabilities/configuration/ide_enabled",
          },
          {
            from: "/vulnerabilities/configuration/waf_bypass",
            to: "/dast/vulnerabilities/configuration/waf_bypass",
          },
          {
            from: "/vulnerabilities/configuration/graphql_apq",
            to: "/dast/vulnerabilities/configuration/graphql_apq",
          },
          {
            from: "/vulnerabilities/configuration/proxy_disclosure",
            to: "/dast/vulnerabilities/configuration/proxy_disclosure",
          },
          {
            from: "/vulnerabilities/protocol",
            to: "/dast/vulnerabilities/protocol",
          },
          {
            from: "/vulnerabilities/protocol/heartbleed",
            to: "/dast/vulnerabilities/protocol/heartbleed",
          },
          {
            from: "/vulnerabilities/protocol/header_access_control_allow_origin",
            to: "/dast/vulnerabilities/protocol/header_access_control_allow_origin",
          },
          {
            from: "/vulnerabilities/protocol/header_strict_transport_security",
            to: "/dast/vulnerabilities/protocol/header_strict_transport_security",
          },
          {
            from: "/vulnerabilities/protocol/ssl_certificate",
            to: "/dast/vulnerabilities/protocol/ssl_certificate",
          },
          {
            from: "/vulnerabilities/protocol/header_content_security_policy",
            to: "/dast/vulnerabilities/protocol/header_content_security_policy",
          },
          {
            from: "/vulnerabilities/protocol/header_x_frame_options",
            to: "/dast/vulnerabilities/protocol/header_x_frame_options",
          },
          {
            from: "/vulnerabilities/protocol/headers",
            to: "/dast/vulnerabilities/protocol/headers",
          },
          {
            from: "/vulnerabilities/protocol/header_set_cookie",
            to: "/dast/vulnerabilities/protocol/header_set_cookie",
          },
          {
            from: "/vulnerabilities/protocol/cors",
            to: "/dast/vulnerabilities/protocol/cors",
          },
          {
            from: "/vulnerabilities/protocol/header_leak",
            to: "/dast/vulnerabilities/protocol/header_leak",
          },
          {
            from: "/vulnerabilities/protocol/header_x_content_type_options",
            to: "/dast/vulnerabilities/protocol/header_x_content_type_options",
          },
          {
            from: "/vulnerabilities/protocol/graphql_content_type",
            to: "/dast/vulnerabilities/protocol/graphql_content_type",
          },
          {
            from: "/vulnerabilities/protocol/server_error",
            to: "/dast/vulnerabilities/protocol/server_error",
          },
          {
            from: "/vulnerabilities/protocol/header_content_type",
            to: "/dast/vulnerabilities/protocol/header_content_type",
          },
          {
            from: "/vulnerabilities/protocol/ssl",
            to: "/dast/vulnerabilities/protocol/ssl",
          },
          {
            from: "/vulnerabilities/protocol/header_cache_control",
            to: "/dast/vulnerabilities/protocol/header_cache_control",
          },
          {
            from: "/vulnerabilities/request_forgery",
            to: "/dast/vulnerabilities/request_forgery",
          },
          {
            from: "/vulnerabilities/request_forgery/csrf_post_based",
            to: "/dast/vulnerabilities/request_forgery/csrf_post_based",
          },
          {
            from: "/vulnerabilities/request_forgery/ssrf_header",
            to: "/dast/vulnerabilities/request_forgery/ssrf_header",
          },
          {
            from: "/vulnerabilities/request_forgery/open_redirect",
            to: "/dast/vulnerabilities/request_forgery/open_redirect",
          },
          {
            from: "/vulnerabilities/request_forgery/ssrf",
            to: "/dast/vulnerabilities/request_forgery/ssrf",
          },
          {
            from: "/vulnerabilities/request_forgery/ssrf_partial",
            to: "/dast/vulnerabilities/request_forgery/ssrf_partial",
          },
          {
            from: "/vulnerabilities/request_forgery/csrf_get_based",
            to: "/dast/vulnerabilities/request_forgery/csrf_get_based",
          },
          {
            from: "/vulnerabilities/resource_limitation",
            to: "/dast/vulnerabilities/resource_limitation",
          },
          {
            from: "/vulnerabilities/resource_limitation/graphql_batch_limit",
            to: "/dast/vulnerabilities/resource_limitation/graphql_batch_limit",
          },
          {
            from: "/vulnerabilities/resource_limitation/response_size",
            to: "/dast/vulnerabilities/resource_limitation/response_size",
          },
          {
            from: "/vulnerabilities/resource_limitation/graphql_depth_limit",
            to: "/dast/vulnerabilities/resource_limitation/graphql_depth_limit",
          },
          {
            from: "/vulnerabilities/resource_limitation/graphql_alias_limit",
            to: "/dast/vulnerabilities/resource_limitation/graphql_alias_limit",
          },
          {
            from: "/vulnerabilities/resource_limitation/graphql_directive_overload",
            to: "/dast/vulnerabilities/resource_limitation/graphql_directive_overload",
          },
          {
            from: "/vulnerabilities/resource_limitation/timeout",
            to: "/dast/vulnerabilities/resource_limitation/timeout",
          },
          {
            from: "/vulnerabilities/resource_limitation/graphql_width_limit",
            to: "/dast/vulnerabilities/resource_limitation/graphql_width_limit",
          },
          {
            from: "/vulnerabilities/resource_limitation/graphql_recursive_fragment",
            to: "/dast/vulnerabilities/resource_limitation/graphql_recursive_fragment",
          },
          {
            from: "/vulnerabilities/resource_limitation/graphql_field_limit",
            to: "/dast/vulnerabilities/resource_limitation/graphql_field_limit",
          },
          {
            from: "/vulnerabilities/resource_limitation/large_json_input",
            to: "/dast/vulnerabilities/resource_limitation/large_json_input",
          },
          {
            from: "/vulnerabilities/resource_limitation/unreachable_server",
            to: "/dast/vulnerabilities/resource_limitation/unreachable_server",
          },
          {
            from: "/vulnerabilities/resource_limitation/character_limit",
            to: "/dast/vulnerabilities/resource_limitation/character_limit",
          },
          {
            from: "/vulnerabilities/resource_limitation/cyclic_query",
            to: "/dast/vulnerabilities/resource_limitation/cyclic_query",
          },
          {
            from: "/vulnerabilities/resource_limitation/graphql_circular_introspection",
            to: "/dast/vulnerabilities/resource_limitation/graphql_circular_introspection",
          },
          {
            from: "/vulnerabilities/resource_limitation/pagination_missing",
            to: "/dast/vulnerabilities/resource_limitation/pagination_missing",
          },
          {
            from: "/vulnerabilities/resource_limitation/graphql_field_duplication",
            to: "/dast/vulnerabilities/resource_limitation/graphql_field_duplication",
          },
          {
            from: "/vulnerabilities/schema",
            to: "/dast/vulnerabilities/schema",
          },
          {
            from: "/vulnerabilities/schema/weak_json_typing",
            to: "/dast/vulnerabilities/schema/weak_json_typing",
          },
          {
            from: "/vulnerabilities/schema/zombie_object",
            to: "/dast/vulnerabilities/schema/zombie_object",
          },
          {
            from: "/vulnerabilities/schema/duplicated_object",
            to: "/dast/vulnerabilities/schema/duplicated_object",
          },
          {
            from: "/vulnerabilities/schema/response_type_missmatch",
            to: "/dast/vulnerabilities/schema/response_type_missmatch",
          },
          {
            from: "/vulnerabilities/schema/invalid_allof",
            to: "/dast/vulnerabilities/schema/invalid_allof",
          },
          {
            from: "/vulnerabilities/schema/positive_integer_validation",
            to: "/dast/vulnerabilities/schema/positive_integer_validation",
          },
          {
            from: "/vulnerabilities/schema/swagger_rules",
            to: "/dast/vulnerabilities/schema/swagger_rules",
          },
          {
            from: "/vulnerabilities/schema/undefined_object",
            to: "/dast/vulnerabilities/schema/undefined_object",
          },
          {
            from: "/vulnerabilities/schema/graphql_response_format",
            to: "/dast/vulnerabilities/schema/graphql_response_format",
          },
          {
            from: "/vulnerabilities/schema/self_compliant_spec",
            to: "/dast/vulnerabilities/schema/self_compliant_spec",
          },
          {
            from: "/vulnerabilities/schema/typing_misconfiguration",
            to: "/dast/vulnerabilities/schema/typing_misconfiguration",
          },
          {
            from: "/vulnerabilities/injection",
            to: "/dast/vulnerabilities/injection",
          },
          {
            from: "/vulnerabilities/injection/improper_input",
            to: "/dast/vulnerabilities/injection/improper_input",
          },
          {
            from: "/vulnerabilities/injection/jwt_alg_none",
            to: "/dast/vulnerabilities/injection/jwt_alg_none",
          },
          {
            from: "/vulnerabilities/injection/ssti",
            to: "/dast/vulnerabilities/injection/ssti",
          },
          {
            from: "/vulnerabilities/injection/sql",
            to: "/dast/vulnerabilities/injection/sql",
          },
          {
            from: "/vulnerabilities/injection/jwt_alg_confusion",
            to: "/dast/vulnerabilities/injection/jwt_alg_confusion",
          },
          {
            from: "/vulnerabilities/injection/directory_traversal",
            to: "/dast/vulnerabilities/injection/directory_traversal",
          },
          {
            from: "/vulnerabilities/injection/file_inclusion",
            to: "/dast/vulnerabilities/injection/file_inclusion",
          },
          {
            from: "/vulnerabilities/injection/nosql",
            to: "/dast/vulnerabilities/injection/nosql",
          },
          {
            from: "/vulnerabilities/injection/jwt_sign_check",
            to: "/dast/vulnerabilities/injection/jwt_sign_check",
          },
          {
            from: "/vulnerabilities/injection/mass_assignment",
            to: "/dast/vulnerabilities/injection/mass_assignment",
          },
          {
            from: "/vulnerabilities/injection/improper_input_stored",
            to: "/dast/vulnerabilities/injection/improper_input_stored",
          },
          {
            from: "/vulnerabilities/injection/command",
            to: "/dast/vulnerabilities/injection/command",
          },
          {
            from: "/vulnerabilities/injection/crlf",
            to: "/dast/vulnerabilities/injection/crlf",
          },
          {
            from: "/vulnerabilities/injection/xxe",
            to: "/dast/vulnerabilities/injection/xxe",
          },
          {
            from: "/vulnerabilities/injection/nosql_stored",
            to: "/dast/vulnerabilities/injection/nosql_stored",
          },
          {
            from: "/vulnerabilities/information_disclosure",
            to: "/dast/vulnerabilities/information_disclosure",
          },
          {
            from: "/vulnerabilities/information_disclosure/debug_mode",
            to: "/dast/vulnerabilities/information_disclosure/debug_mode",
          },
          {
            from: "/vulnerabilities/information_disclosure/file_disclosure",
            to: "/dast/vulnerabilities/information_disclosure/file_disclosure",
          },
          {
            from: "/vulnerabilities/information_disclosure/introspection_enabled",
            to: "/dast/vulnerabilities/information_disclosure/introspection_enabled",
          },
          {
            from: "/vulnerabilities/information_disclosure/data_leak",
            to: "/dast/vulnerabilities/information_disclosure/data_leak",
          },
          {
            from: "/vulnerabilities/information_disclosure/code",
            to: "/dast/vulnerabilities/information_disclosure/code",
          },
          {
            from: "/vulnerabilities/information_disclosure/potential_cve",
            to: "/dast/vulnerabilities/information_disclosure/potential_cve",
          },
          {
            from: "/vulnerabilities/information_disclosure/graphql_field_suggestion",
            to: "/dast/vulnerabilities/information_disclosure/graphql_field_suggestion",
          },
          {
            from: "/vulnerabilities/information_disclosure/stacktrace",
            to: "/dast/vulnerabilities/information_disclosure/stacktrace",
          },
          {
            from: "/vulnerabilities/information_disclosure/leaking_authentication",
            to: "/dast/vulnerabilities/information_disclosure/leaking_authentication",
          },
          {
            from: "/vulnerabilities/information_disclosure/private_ip",
            to: "/dast/vulnerabilities/information_disclosure/private_ip",
          },
          {
            from: "/vulnerabilities/information_disclosure/software_component_leak",
            to: "/dast/vulnerabilities/information_disclosure/software_component_leak",
          },
          {
            from: "/vulnerabilities/access_control",
            to: "/dast/vulnerabilities/access_control",
          },
          {
            from: "/vulnerabilities/access_control/private_fields",
            to: "/dast/vulnerabilities/access_control/private_fields",
          },
          {
            from: "/vulnerabilities/access_control/public_state_altering_operation",
            to: "/dast/vulnerabilities/access_control/public_state_altering_operation",
          },
          {
            from: "/vulnerabilities/access_control/bola",
            to: "/dast/vulnerabilities/access_control/bola",
          },
          {
            from: "/vulnerabilities/access_control/auth_bypass",
            to: "/dast/vulnerabilities/access_control/auth_bypass",
          },
          {
            from: "/vulnerabilities/access_control/private_data",
            to: "/dast/vulnerabilities/access_control/private_data",
          },
          {
            from: "/vulnerabilities/access_control/tenant_isolation",
            to: "/dast/vulnerabilities/access_control/tenant_isolation",
          },
          {
            from: "/vulnerabilities/access_control/sensitive_endpoint_bruteforce",
            to: "/dast/vulnerabilities/access_control/sensitive_endpoint_bruteforce",
          },
          {
            from: "/vulnerabilities/custom",
            to: "/dast/vulnerabilities/custom",
          },
          {
            from: "/vulnerabilities/custom/security_checks",
            to: "/dast/vulnerabilities/custom/security_checks",
          },
          { from: "/ci-cd", to: "/dast/ci-cd/" },
          { from: "/ci-cd/references", to: "/dast/ci-cd/references/" },
          {
            from: "/ci-cd/references/gitlab",
            to: "/dast/ci-cd/references/gitlab",
          },
          { from: "/ci-cd/references/api", to: "/dast/ci-cd/references/api" },
          {
            from: "/ci-cd/references/circleci",
            to: "/dast/ci-cd/references/circleci",
          },
          { from: "/ci-cd/references/cli", to: "/dast/ci-cd/references/cli" },
          {
            from: "/ci-cd/references/bitbucket",
            to: "/dast/ci-cd/references/bitbucket",
          },
          {
            from: "/ci-cd/references/azure",
            to: "/dast/ci-cd/references/azure",
          },
          {
            from: "/ci-cd/references/jenkins",
            to: "/dast/ci-cd/references/jenkins",
          },
          {
            from: "/ci-cd/references/github",
            to: "/dast/ci-cd/references/github",
          },
          {
            from: "/ci-cd/introspection-update",
            to: "/dast/ci-cd/introspection-update",
          },
          {
            from: "/ci-cd/configuration-override",
            to: "/dast/ci-cd/configuration-override",
          },
          { from: "/ci-cd/commit-sha", to: "/dast/ci-cd/commit-sha" },
          { from: "/features", to: "/dast/features/" },
          { from: "/features/catalog", to: "/dast/features/catalog" },
          {
            from: "/features/sensitive-data",
            to: "/dast/features/sensitive-data",
          },
          { from: "/features/remediation", to: "/dast/features/remediation" },
          {
            from: "/features/posture-management",
            to: "/dast/features/posture-management",
          },
          { from: "/features/reporting", to: "/dast/features/reporting" },
          { from: "/features/compliance", to: "/dast/features/compliance" },
          { from: "/advanced-usage", to: "/dast/advanced-usage/" },
          {
            from: "/advanced-usage/access_control",
            to: "/dast/advanced-usage/access_control",
          },
          {
            from: "/advanced-usage/internal-apis",
            to: "/dast/advanced-usage/internal-apis",
          },
          {
            from: "/advanced-usage/data-types-reference",
            to: "/dast/advanced-usage/data-types-reference",
          },
          {
            from: "/advanced-usage/blacklist",
            to: "/dast/advanced-usage/blacklist",
          },
          {
            from: "/advanced-usage/rate-limiting",
            to: "/dast/advanced-usage/rate-limiting",
          },
          {
            from: "/advanced-usage/parameters-reference",
            to: "/dast/advanced-usage/parameters-reference",
          },
          {
            from: "/advanced-usage/custom-payloads",
            to: "/dast/advanced-usage/custom-payloads",
          },
        ],
      },
    ],
    require.resolve("docusaurus-lunr-search"),
  ],

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: "/",
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: "https://github.com/Escape-Technologies/docs/edit/main/",
        },
        blog: false,
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: "light",
        disableSwitch: false,
      },
      navbar: {
        logo: {
          alt: "Escape logo",
          src: "img/logo.svg",
          height: "300px",
        },
        items: [
          {
            type: "doc",
            position: "left",
            docId: "dast/getting-started/index",
            label: "DAST",
          },
          {
            type: "doc",
            position: "left",
            docId: "inventory/introduction/index",
            label: "Inventory",
          },
          {
            href: "https://calendly.com/d/46g-xzy-dgw",
            label: "New to Escape? Chat with our team",
            position: "right",
          },
          {
            href: "https://escape.tech",
            label: "Website",
            position: "right",
          },
          {
            href: "https://app.escape.tech/login",
            label: "Login",
            position: "right",
          },
          {
            href: "https://github.com/Escape-Technologies",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        links: [
          {
            title: "Community",
            items: [
              {
                label: "Discord",
                href: "https://discord.escape.tech",
              },
              {
                label: "GitHub",
                href: "https://github.com/escape-technologies",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "Escape website",
                href: "https://escape.tech/",
              },
              {
                label: "Blog",
                href: "https://escape.tech/blog",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Escape Technologies SAS.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
