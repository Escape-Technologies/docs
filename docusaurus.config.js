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
          { from: "/getting-started/", to: "/api-dast/getting-started/" },
          {
            from: "/getting-started/scan-results",
            to: "/api-dast/getting-started/scan-results",
          },
          {
            from: "/getting-started/retrieve-schema",
            to: "/api-dast/getting-started/retrieve-schema",
          },
          {
            from: "/getting-started/scan-your-first-app",
            to: "/api-dast/getting-started/scan-your-first-app",
          },
          {
            from: "/getting-started/improve-scan-coverage",
            to: "/api-dast/getting-started/improve-scan-coverage",
          },
          {
            from: "/getting-started/scan-scheduling",
            to: "/api-dast/getting-started/scan-scheduling",
          },
          { from: "/integrations/email", to: "/platform/workflows/email" },
          { from: "/integrations/slack", to: "/platform/workflows/slack" },
          {
            from: "/integrations/discord",
            to: "/platform/workflows/discord",
          },
          {
            from: "/custom-rules/Seeders",
            to: "/api-dast/custom-rules/Seeders",
          },
          { from: "/custom-rules/", to: "/api-dast/custom-rules/" },
          {
            from: "/custom-rules/Mutators",
            to: "/api-dast/custom-rules/Mutators",
          },
          {
            from: "/custom-rules/Transformations",
            to: "/api-dast/custom-rules/Transformations",
          },
          {
            from: "/custom-rules/Alerting",
            to: "/api-dast/custom-rules/Alerting",
          },
          {
            from: "/custom-rules/Reference",
            to: "/api-dast/custom-rules/Reference",
          },
          {
            from: "/custom-rules/Detectors",
            to: "/api-dast/custom-rules/Detectors",
          },
          {
            from: "/authentication/reference/",
            to: "/api-dast/authentication/reference/",
          },
          {
            from: "/authentication/advanced/",
            to: "/api-dast/authentication/advanced/",
          },
          { from: "/authentication/", to: "/api-dast/authentication/" },
          {
            from: "/authentication/presets/awscognito",
            to: "/api-dast/authentication/presets/awscognito",
          },
          {
            from: "/authentication/presets/http",
            to: "/api-dast/authentication/presets/http",
          },
          {
            from: "/authentication/presets/oauthclientcredentials",
            to: "/api-dast/authentication/presets/oauthclientcredentials",
          },
          {
            from: "/authentication/presets/basic",
            to: "/api-dast/authentication/presets/basic",
          },
          {
            from: "/authentication/presets/webdriver",
            to: "/api-dast/authentication/presets/webdriver",
          },
          {
            from: "/authentication/presets/headers",
            to: "/api-dast/authentication/presets/headers",
          },
          {
            from: "/authentication/presets/oauthuserpassword",
            to: "/api-dast/authentication/presets/oauthuserpassword",
          },
          {
            from: "/authentication/presets/curl",
            to: "/api-dast/authentication/presets/curl",
          },
          {
            from: "/authentication/presets/digest",
            to: "/api-dast/authentication/presets/digest",
          },
          {
            from: "/authentication/presets/graphql",
            to: "/api-dast/authentication/presets/graphql",
          },
          {
            from: "/authentication/presets/curlsequence",
            to: "/api-dast/authentication/presets/curlsequence",
          },
          {
            from: "/enterprise/repeater",
            to: "/platform/enterprise/private-location",
          },
          {
            from: "/platform/enterprise/repeater",
            to: "/platform/enterprise/private-location",
          },
          {
            from: "/enterprise/deployment-options",
            to: "/platform/enterprise/deployment-options",
          },
          { from: "/enterprise/rbac", to: "/platform/enterprise/rbac" },
          {
            from: "/enterprise/sla-support",
            to: "/platform/enterprise/sla-support",
          },
          {
            from: "/enterprise/audit-logs",
            to: "/platform/enterprise/audit-logs",
          },
          { from: "/enterprise/sso", to: "/platform/enterprise/sso" },
          {
            from: "/enterprise/rotating-encryption",
            to: "/platform/enterprise/rotating-encryption",
          },
          {
            from: "/vulnerabilities/configuration/directory_listing",
            to: "/api-dast/vulnerabilities/configuration/directory_listing",
          },
          {
            from: "/vulnerabilities/configuration/error_type_inconsistency",
            to: "/api-dast/vulnerabilities/configuration/error_type_inconsistency",
          },
          {
            from: "/vulnerabilities/configuration/unhandled_endpoint",
            to: "/api-dast/vulnerabilities/configuration/unhandled_endpoint",
          },
          {
            from: "/vulnerabilities/configuration/ide_enabled",
            to: "/api-dast/vulnerabilities/configuration/ide_enabled",
          },
          {
            from: "/vulnerabilities/configuration/waf_bypass",
            to: "/api-dast/vulnerabilities/configuration/waf_bypass",
          },
          {
            from: "/vulnerabilities/configuration/graphql_apq",
            to: "/api-dast/vulnerabilities/configuration/graphql_apq",
          },
          {
            from: "/vulnerabilities/configuration/proxy_disclosure",
            to: "/api-dast/vulnerabilities/configuration/proxy_disclosure",
          },
          { from: "/vulnerabilities/", to: "/api-dast/vulnerabilities/" },
          {
            from: "/vulnerabilities/protocol/heartbleed",
            to: "/api-dast/vulnerabilities/protocol/heartbleed",
          },
          {
            from: "/vulnerabilities/protocol/header_access_control_allow_origin",
            to: "/api-dast/vulnerabilities/protocol/header_access_control_allow_origin",
          },
          {
            from: "/vulnerabilities/protocol/header_strict_transport_security",
            to: "/api-dast/vulnerabilities/protocol/header_strict_transport_security",
          },
          {
            from: "/vulnerabilities/protocol/ssl_certificate",
            to: "/api-dast/vulnerabilities/protocol/ssl_certificate",
          },
          {
            from: "/vulnerabilities/protocol/header_content_security_policy",
            to: "/api-dast/vulnerabilities/protocol/header_content_security_policy",
          },
          {
            from: "/vulnerabilities/protocol/header_x_frame_options",
            to: "/api-dast/vulnerabilities/protocol/header_x_frame_options",
          },
          {
            from: "/vulnerabilities/protocol/headers",
            to: "/api-dast/vulnerabilities/protocol/headers",
          },
          {
            from: "/vulnerabilities/protocol/header_set_cookie",
            to: "/api-dast/vulnerabilities/protocol/header_set_cookie",
          },
          {
            from: "/vulnerabilities/protocol/cors",
            to: "/api-dast/vulnerabilities/protocol/cors",
          },
          {
            from: "/vulnerabilities/protocol/header_leak",
            to: "/api-dast/vulnerabilities/protocol/header_leak",
          },
          {
            from: "/vulnerabilities/protocol/header_x_content_type_options",
            to: "/api-dast/vulnerabilities/protocol/header_x_content_type_options",
          },
          {
            from: "/vulnerabilities/protocol/graphql_content_type",
            to: "/api-dast/vulnerabilities/protocol/graphql_content_type",
          },
          {
            from: "/vulnerabilities/protocol/server_error",
            to: "/api-dast/vulnerabilities/protocol/server_error",
          },
          {
            from: "/vulnerabilities/protocol/header_content_type",
            to: "/api-dast/vulnerabilities/protocol/header_content_type",
          },
          {
            from: "/vulnerabilities/protocol/ssl",
            to: "/api-dast/vulnerabilities/protocol/ssl",
          },
          {
            from: "/vulnerabilities/protocol/header_cache_control",
            to: "/api-dast/vulnerabilities/protocol/header_cache_control",
          },
          {
            from: "/vulnerabilities/request_forgery/csrf_post_based",
            to: "/api-dast/vulnerabilities/request_forgery/csrf_post_based",
          },
          {
            from: "/vulnerabilities/request_forgery/ssrf_header",
            to: "/api-dast/vulnerabilities/request_forgery/ssrf_header",
          },
          {
            from: "/vulnerabilities/request_forgery/open_redirect",
            to: "/api-dast/vulnerabilities/request_forgery/open_redirect",
          },
          {
            from: "/vulnerabilities/request_forgery/ssrf",
            to: "/api-dast/vulnerabilities/request_forgery/ssrf",
          },
          {
            from: "/vulnerabilities/request_forgery/ssrf_partial",
            to: "/api-dast/vulnerabilities/request_forgery/ssrf_partial",
          },
          {
            from: "/vulnerabilities/request_forgery/csrf_get_based",
            to: "/api-dast/vulnerabilities/request_forgery/csrf_get_based",
          },
          {
            from: "/vulnerabilities/resource_limitation/graphql_batch_limit",
            to: "/api-dast/vulnerabilities/resource_limitation/graphql_batch_limit",
          },
          {
            from: "/vulnerabilities/resource_limitation/response_size",
            to: "/api-dast/vulnerabilities/resource_limitation/response_size",
          },
          {
            from: "/vulnerabilities/resource_limitation/graphql_depth_limit",
            to: "/api-dast/vulnerabilities/resource_limitation/graphql_depth_limit",
          },
          {
            from: "/vulnerabilities/resource_limitation/graphql_alias_limit",
            to: "/api-dast/vulnerabilities/resource_limitation/graphql_alias_limit",
          },
          {
            from: "/vulnerabilities/resource_limitation/graphql_directive_overload",
            to: "/api-dast/vulnerabilities/resource_limitation/graphql_directive_overload",
          },
          {
            from: "/vulnerabilities/resource_limitation/timeout",
            to: "/api-dast/vulnerabilities/resource_limitation/timeout",
          },
          {
            from: "/vulnerabilities/resource_limitation/graphql_width_limit",
            to: "/api-dast/vulnerabilities/resource_limitation/graphql_width_limit",
          },
          {
            from: "/vulnerabilities/resource_limitation/graphql_recursive_fragment",
            to: "/api-dast/vulnerabilities/resource_limitation/graphql_recursive_fragment",
          },
          {
            from: "/vulnerabilities/resource_limitation/graphql_field_limit",
            to: "/api-dast/vulnerabilities/resource_limitation/graphql_field_limit",
          },
          {
            from: "/vulnerabilities/resource_limitation/large_json_input",
            to: "/api-dast/vulnerabilities/resource_limitation/large_json_input",
          },
          {
            from: "/vulnerabilities/resource_limitation/unreachable_server",
            to: "/api-dast/vulnerabilities/resource_limitation/unreachable_server",
          },
          {
            from: "/vulnerabilities/resource_limitation/character_limit",
            to: "/api-dast/vulnerabilities/resource_limitation/character_limit",
          },
          {
            from: "/vulnerabilities/resource_limitation/cyclic_query",
            to: "/api-dast/vulnerabilities/resource_limitation/cyclic_query",
          },
          {
            from: "/vulnerabilities/resource_limitation/graphql_circular_introspection",
            to: "/api-dast/vulnerabilities/resource_limitation/graphql_circular_introspection",
          },
          {
            from: "/vulnerabilities/resource_limitation/pagination_missing",
            to: "/api-dast/vulnerabilities/resource_limitation/pagination_missing",
          },
          {
            from: "/vulnerabilities/resource_limitation/graphql_field_duplication",
            to: "/api-dast/vulnerabilities/resource_limitation/graphql_field_duplication",
          },
          {
            from: "/vulnerabilities/schema/weak_json_typing",
            to: "/api-dast/vulnerabilities/schema/weak_json_typing",
          },
          {
            from: "/vulnerabilities/schema/zombie_object",
            to: "/api-dast/vulnerabilities/schema/zombie_object",
          },
          {
            from: "/vulnerabilities/schema/duplicated_object",
            to: "/api-dast/vulnerabilities/schema/duplicated_object",
          },
          {
            from: "/vulnerabilities/schema/response_type_missmatch",
            to: "/api-dast/vulnerabilities/schema/response_type_missmatch",
          },
          {
            from: "/vulnerabilities/schema/invalid_refs",
            to: "/api-dast/vulnerabilities/schema/invalid_refs",
          },
          {
            from: "/vulnerabilities/schema/invalid_allof",
            to: "/api-dast/vulnerabilities/schema/invalid_allof",
          },
          {
            from: "/vulnerabilities/schema/positive_integer_validation",
            to: "/api-dast/vulnerabilities/schema/positive_integer_validation",
          },
          {
            from: "/vulnerabilities/schema/swagger_rules",
            to: "/api-dast/vulnerabilities/schema/swagger_rules",
          },
          {
            from: "/vulnerabilities/schema/undefined_object",
            to: "/api-dast/vulnerabilities/schema/undefined_object",
          },
          {
            from: "/vulnerabilities/schema/graphql_response_format",
            to: "/api-dast/vulnerabilities/schema/graphql_response_format",
          },
          {
            from: "/vulnerabilities/schema/self_compliant_spec",
            to: "/api-dast/vulnerabilities/schema/self_compliant_spec",
          },
          {
            from: "/vulnerabilities/schema/invalid_parameters_in_path",
            to: "/api-dast/vulnerabilities/schema/invalid_parameters_in_path",
          },
          {
            from: "/vulnerabilities/schema/typing_misconfiguration",
            to: "/api-dast/vulnerabilities/schema/typing_misconfiguration",
          },
          {
            from: "/vulnerabilities/injection/improper_input",
            to: "/api-dast/vulnerabilities/injection/improper_input",
          },
          {
            from: "/vulnerabilities/injection/jwt_alg_none",
            to: "/api-dast/vulnerabilities/injection/jwt_alg_none",
          },
          {
            from: "/vulnerabilities/injection/ssti",
            to: "/api-dast/vulnerabilities/injection/ssti",
          },
          {
            from: "/vulnerabilities/injection/sql",
            to: "/api-dast/vulnerabilities/injection/sql",
          },
          {
            from: "/vulnerabilities/injection/jwt_alg_confusion",
            to: "/api-dast/vulnerabilities/injection/jwt_alg_confusion",
          },
          {
            from: "/vulnerabilities/injection/directory_traversal",
            to: "/api-dast/vulnerabilities/injection/directory_traversal",
          },
          {
            from: "/vulnerabilities/injection/file_inclusion",
            to: "/api-dast/vulnerabilities/injection/file_inclusion",
          },
          {
            from: "/vulnerabilities/injection/nosql",
            to: "/api-dast/vulnerabilities/injection/nosql",
          },
          {
            from: "/vulnerabilities/injection/jwt_sign_check",
            to: "/api-dast/vulnerabilities/injection/jwt_sign_check",
          },
          {
            from: "/vulnerabilities/injection/mass_assignment",
            to: "/api-dast/vulnerabilities/injection/mass_assignment",
          },
          {
            from: "/vulnerabilities/injection/improper_input_stored",
            to: "/api-dast/vulnerabilities/injection/improper_input_stored",
          },
          {
            from: "/vulnerabilities/injection/command",
            to: "/api-dast/vulnerabilities/injection/command",
          },
          {
            from: "/vulnerabilities/injection/crlf",
            to: "/api-dast/vulnerabilities/injection/crlf",
          },
          {
            from: "/vulnerabilities/injection/xxe",
            to: "/api-dast/vulnerabilities/injection/xxe",
          },
          {
            from: "/vulnerabilities/injection/nosql_stored",
            to: "/api-dast/vulnerabilities/injection/nosql_stored",
          },
          {
            from: "/vulnerabilities/information_disclosure/exposed_settings.php",
            to: "/api-dast/vulnerabilities/information_disclosure/exposed_settings.php",
          },
          {
            from: "/vulnerabilities/information_disclosure/debug_mode",
            to: "/api-dast/vulnerabilities/information_disclosure/debug_mode",
          },
          {
            from: "/vulnerabilities/information_disclosure/alibaba_canal_leak",
            to: "/api-dast/vulnerabilities/information_disclosure/alibaba_canal_leak",
          },
          {
            from: "/vulnerabilities/information_disclosure/appveyor_config_exposure",
            to: "/api-dast/vulnerabilities/information_disclosure/appveyor_config_exposure",
          },
          {
            from: "/vulnerabilities/information_disclosure/file_disclosure",
            to: "/api-dast/vulnerabilities/information_disclosure/file_disclosure",
          },
          {
            from: "/vulnerabilities/information_disclosure/introspection_enabled",
            to: "/api-dast/vulnerabilities/information_disclosure/introspection_enabled",
          },
          {
            from: "/vulnerabilities/information_disclosure/data_leak",
            to: "/api-dast/vulnerabilities/information_disclosure/data_leak",
          },
          {
            from: "/vulnerabilities/information_disclosure/awstats_exposure",
            to: "/api-dast/vulnerabilities/information_disclosure/awstats_exposure",
          },
          {
            from: "/vulnerabilities/information_disclosure/code",
            to: "/api-dast/vulnerabilities/information_disclosure/code",
          },
          {
            from: "/vulnerabilities/information_disclosure/ansible_config_exposure",
            to: "/api-dast/vulnerabilities/information_disclosure/ansible_config_exposure",
          },
          {
            from: "/vulnerabilities/information_disclosure/aws_config_exposure",
            to: "/api-dast/vulnerabilities/information_disclosure/aws_config_exposure",
          },
          {
            from: "/vulnerabilities/information_disclosure/potential_cve",
            to: "/api-dast/vulnerabilities/information_disclosure/potential_cve",
          },
          {
            from: "/vulnerabilities/information_disclosure/exposed_mysql_config",
            to: "/api-dast/vulnerabilities/information_disclosure/exposed_mysql_config",
          },
          {
            from: "/vulnerabilities/information_disclosure/springboot_actuator_env",
            to: "/api-dast/vulnerabilities/information_disclosure/springboot_actuator_env",
          },
          {
            from: "/vulnerabilities/information_disclosure/graphql_field_suggestion",
            to: "/api-dast/vulnerabilities/information_disclosure/graphql_field_suggestion",
          },
          {
            from: "/vulnerabilities/information_disclosure/airflow_config_exposure",
            to: "/api-dast/vulnerabilities/information_disclosure/airflow_config_exposure",
          },
          {
            from: "/vulnerabilities/information_disclosure/stacktrace",
            to: "/api-dast/vulnerabilities/information_disclosure/stacktrace",
          },
          {
            from: "/vulnerabilities/information_disclosure/appspec_exposure",
            to: "/api-dast/vulnerabilities/information_disclosure/appspec_exposure",
          },
          {
            from: "/vulnerabilities/information_disclosure/azure_tenant_id_exposure",
            to: "/api-dast/vulnerabilities/information_disclosure/azure_tenant_id_exposure",
          },
          {
            from: "/vulnerabilities/information_disclosure/aws_docker_config_exposure",
            to: "/api-dast/vulnerabilities/information_disclosure/aws_docker_config_exposure",
          },
          {
            from: "/vulnerabilities/information_disclosure/leaking_authentication",
            to: "/api-dast/vulnerabilities/information_disclosure/leaking_authentication",
          },
          {
            from: "/vulnerabilities/information_disclosure/awstats_config_exposure",
            to: "/api-dast/vulnerabilities/information_disclosure/awstats_config_exposure",
          },
          {
            from: "/vulnerabilities/information_disclosure/exposed_sql_dumps",
            to: "/api-dast/vulnerabilities/information_disclosure/exposed_sql_dumps",
          },
          {
            from: "/vulnerabilities/information_disclosure/private_ip",
            to: "/api-dast/vulnerabilities/information_disclosure/private_ip",
          },
          {
            from: "/vulnerabilities/information_disclosure/software_component_leak",
            to: "/api-dast/vulnerabilities/information_disclosure/software_component_leak",
          },
          {
            from: "/vulnerabilities/access_control/private_fields",
            to: "/api-dast/vulnerabilities/access_control/private_fields",
          },
          {
            from: "/vulnerabilities/access_control/public_state_altering_operation",
            to: "/api-dast/vulnerabilities/access_control/public_state_altering_operation",
          },
          {
            from: "/vulnerabilities/access_control/bola",
            to: "/api-dast/vulnerabilities/access_control/bola",
          },
          {
            from: "/vulnerabilities/access_control/auth_bypass",
            to: "/api-dast/vulnerabilities/access_control/auth_bypass",
          },
          {
            from: "/vulnerabilities/access_control/private_data",
            to: "/api-dast/vulnerabilities/access_control/private_data",
          },
          {
            from: "/vulnerabilities/access_control/tenant_isolation",
            to: "/api-dast/vulnerabilities/access_control/tenant_isolation",
          },
          {
            from: "/vulnerabilities/access_control/sensitive_endpoint_bruteforce",
            to: "/api-dast/vulnerabilities/access_control/sensitive_endpoint_bruteforce",
          },
          {
            from: "/vulnerabilities/custom/security_checks",
            to: "/api-dast/vulnerabilities/custom/security_checks",
          },
          {
            from: "/ci-cd/references",
            to: "/api-dast/ci-cd/references/gitlab",
          },
          {
            from: "/ci-cd/references/gitlab",
            to: "/api-dast/ci-cd/references/gitlab",
          },
          {
            from: "/ci-cd/references/api",
            to: "/platform/reference/api",
          },
          {
            from: "/ci-cd/references/circleci",
            to: "/api-dast/ci-cd/references/circleci",
          },
          {
            from: "/ci-cd/references/cli",
            to: "/api-dast/ci-cd/references/cli",
          },
          {
            from: "/ci-cd/references/bitbucket",
            to: "/api-dast/ci-cd/references/bitbucket",
          },
          {
            from: "/ci-cd/references/azure",
            to: "/api-dast/ci-cd/references/azure",
          },
          {
            from: "/ci-cd/references/jenkins",
            to: "/api-dast/ci-cd/references/jenkins",
          },
          {
            from: "/ci-cd/references/github",
            to: "/api-dast/ci-cd/references/github",
          },
          { from: "/ci-cd/", to: "/api-dast/ci-cd/" },
          {
            from: "/ci-cd/introspection-update",
            to: "/api-dast/ci-cd/introspection-update",
          },
          {
            from: "/ci-cd/configuration-override",
            to: "/api-dast/ci-cd/configuration-override",
          },
          { from: "/ci-cd/commit-sha", to: "/api-dast/ci-cd/commit-sha" },
          {
            from: "/features/sensitive-data",
            to: "/api-dast/features/sensitive-data",
          },
          {
            from: "/features/remediation",
            to: "/api-dast/features/remediation",
          },
          { from: "/features/", to: "/api-dast/features/" },
          {
            from: "/features/posture-management",
            to: "/api-dast/features/posture-management",
          },
          { from: "/features/reporting", to: "/api-dast/features/reporting" },
          { from: "/features/compliance", to: "/api-dast/features/compliance" },
          {
            from: "/advanced-usage/access_control",
            to: "/api-dast/advanced-usage/access_control",
          },
          {
            from: "/advanced-usage/internal-apis",
            to: "/api-dast/advanced-usage/internal-apis",
          },
          { from: "/advanced-usage/", to: "/api-dast/advanced-usage/" },
          {
            from: "/advanced-usage/data-types-reference",
            to: "/platform/reference/data-types-reference",
          },
          {
            from: "/advanced-usage/blacklist",
            to: "/api-dast/advanced-usage/blacklist",
          },
          {
            from: "/advanced-usage/rate-limiting",
            to: "/api-dast/advanced-usage/rate-limiting",
          },
          {
            from: "/advanced-usage/parameters-reference",
            to: "/api-dast/advanced-usage/parameters-reference",
          },
          {
            from: "/advanced-usage/custom-payloads",
            to: "/api-dast/advanced-usage/custom-payloads",
          },
        ],
        createRedirects(existingPath) {
          if (existingPath.includes("/testing")) {
            return [existingPath.replace("/testing", "/api-dast")];
          }
          return undefined; // Return a falsy value: no redirect created
        },
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
        defaultMode: "dark",
        disableSwitch: false,
      },
      navbar: {
        logo: {
          src: "img/logo.svg",
          alt: "Escape logo",
          height: "300px",
        },
        items: [
          {
            type: "doc",
            position: "left",
            docId: "inventory/introduction/index",
            label: "Inventory",
          },
          {
            type: "doc",
            position: "left",
            docId: "api-dast/getting-started/index",
            label: "API DAST",
          },
          {
            type: "doc",
            position: "left",
            docId: "frontend-dast/getting-started/index",
            label: "Frontend DAST",
          },
          {
            type: "doc",
            position: "left",
            docId: "platform/introduction/index",
            label: "Platform",
          },
          {
            href: "https://calendly.com/d/46g-xzy-dgw",
            label: "Chat with our Team",
            position: "right",
          },
          {
            href: "https://escape.tech",
            label: "Website",
            position: "right",
          },
          {
            href: "https://github.com/Escape-Technologies",
            label: "GitHub",
            position: "right",
          },
          {
            href: "https://app.escape.tech/login",
            label: "Login",
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
                label: "Slack",
                href: "https://slack.escape.tech",
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
