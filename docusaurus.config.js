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
          { from: "/getting-started/", to: "/testing/getting-started/" },
          {
            from: "/getting-started/scan-results",
            to: "/testing/getting-started/scan-results",
          },
          {
            from: "/getting-started/retrieve-schema",
            to: "/testing/getting-started/retrieve-schema",
          },
          {
            from: "/getting-started/scan-your-first-app",
            to: "/testing/getting-started/scan-your-first-app",
          },
          {
            from: "/getting-started/improve-scan-coverage",
            to: "/testing/getting-started/improve-scan-coverage",
          },
          {
            from: "/getting-started/scan-scheduling",
            to: "/testing/getting-started/scan-scheduling",
          },
          { from: "/integrations/email", to: "/platform/workflows/email" },
          { from: "/integrations/slack", to: "/platform/workflows/slack" },
          {
            from: "/integrations/discord",
            to: "/platform/workflows/discord",
          },
          {
            from: "/custom-tests/Seeders",
            to: "/testing/custom-tests/Seeders",
          },
          { from: "/custom-tests/", to: "/testing/custom-tests/" },
          {
            from: "/custom-tests/Mutators",
            to: "/testing/custom-tests/Mutators",
          },
          {
            from: "/custom-tests/Transformations",
            to: "/testing/custom-tests/Transformations",
          },
          {
            from: "/custom-tests/Alerting",
            to: "/testing/custom-tests/Alerting",
          },
          {
            from: "/custom-tests/Reference",
            to: "/testing/custom-tests/Reference",
          },
          {
            from: "/custom-tests/Detectors",
            to: "/testing/custom-tests/Detectors",
          },
          {
            from: "/authentication/reference/",
            to: "/testing/authentication/reference/",
          },
          {
            from: "/authentication/advanced/",
            to: "/testing/authentication/advanced/",
          },
          { from: "/authentication/", to: "/testing/authentication/" },
          {
            from: "/authentication/presets/awscognito",
            to: "/testing/authentication/presets/awscognito",
          },
          {
            from: "/authentication/presets/http",
            to: "/testing/authentication/presets/http",
          },
          {
            from: "/authentication/presets/oauthclientcredentials",
            to: "/testing/authentication/presets/oauthclientcredentials",
          },
          {
            from: "/authentication/presets/basic",
            to: "/testing/authentication/presets/basic",
          },
          {
            from: "/authentication/presets/webdriver",
            to: "/testing/authentication/presets/webdriver",
          },
          {
            from: "/authentication/presets/headers",
            to: "/testing/authentication/presets/headers",
          },
          {
            from: "/authentication/presets/oauthuserpassword",
            to: "/testing/authentication/presets/oauthuserpassword",
          },
          {
            from: "/authentication/presets/curl",
            to: "/testing/authentication/presets/curl",
          },
          {
            from: "/authentication/presets/digest",
            to: "/testing/authentication/presets/digest",
          },
          {
            from: "/authentication/presets/graphql",
            to: "/testing/authentication/presets/graphql",
          },
          {
            from: "/authentication/presets/curlsequence",
            to: "/testing/authentication/presets/curlsequence",
          },
          { from: "/enterprise/repeater", to: "/platform/enterprise/repeater" },
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
            to: "/testing/vulnerabilities/configuration/directory_listing",
          },
          {
            from: "/vulnerabilities/configuration/error_type_inconsistency",
            to: "/testing/vulnerabilities/configuration/error_type_inconsistency",
          },
          {
            from: "/vulnerabilities/configuration/unhandled_endpoint",
            to: "/testing/vulnerabilities/configuration/unhandled_endpoint",
          },
          {
            from: "/vulnerabilities/configuration/ide_enabled",
            to: "/testing/vulnerabilities/configuration/ide_enabled",
          },
          {
            from: "/vulnerabilities/configuration/waf_bypass",
            to: "/testing/vulnerabilities/configuration/waf_bypass",
          },
          {
            from: "/vulnerabilities/configuration/graphql_apq",
            to: "/testing/vulnerabilities/configuration/graphql_apq",
          },
          {
            from: "/vulnerabilities/configuration/proxy_disclosure",
            to: "/testing/vulnerabilities/configuration/proxy_disclosure",
          },
          { from: "/vulnerabilities/", to: "/testing/vulnerabilities/" },
          {
            from: "/vulnerabilities/protocol/heartbleed",
            to: "/testing/vulnerabilities/protocol/heartbleed",
          },
          {
            from: "/vulnerabilities/protocol/header_access_control_allow_origin",
            to: "/testing/vulnerabilities/protocol/header_access_control_allow_origin",
          },
          {
            from: "/vulnerabilities/protocol/header_strict_transport_security",
            to: "/testing/vulnerabilities/protocol/header_strict_transport_security",
          },
          {
            from: "/vulnerabilities/protocol/ssl_certificate",
            to: "/testing/vulnerabilities/protocol/ssl_certificate",
          },
          {
            from: "/vulnerabilities/protocol/header_content_security_policy",
            to: "/testing/vulnerabilities/protocol/header_content_security_policy",
          },
          {
            from: "/vulnerabilities/protocol/header_x_frame_options",
            to: "/testing/vulnerabilities/protocol/header_x_frame_options",
          },
          {
            from: "/vulnerabilities/protocol/headers",
            to: "/testing/vulnerabilities/protocol/headers",
          },
          {
            from: "/vulnerabilities/protocol/header_set_cookie",
            to: "/testing/vulnerabilities/protocol/header_set_cookie",
          },
          {
            from: "/vulnerabilities/protocol/cors",
            to: "/testing/vulnerabilities/protocol/cors",
          },
          {
            from: "/vulnerabilities/protocol/header_leak",
            to: "/testing/vulnerabilities/protocol/header_leak",
          },
          {
            from: "/vulnerabilities/protocol/header_x_content_type_options",
            to: "/testing/vulnerabilities/protocol/header_x_content_type_options",
          },
          {
            from: "/vulnerabilities/protocol/graphql_content_type",
            to: "/testing/vulnerabilities/protocol/graphql_content_type",
          },
          {
            from: "/vulnerabilities/protocol/server_error",
            to: "/testing/vulnerabilities/protocol/server_error",
          },
          {
            from: "/vulnerabilities/protocol/header_content_type",
            to: "/testing/vulnerabilities/protocol/header_content_type",
          },
          {
            from: "/vulnerabilities/protocol/ssl",
            to: "/testing/vulnerabilities/protocol/ssl",
          },
          {
            from: "/vulnerabilities/protocol/header_cache_control",
            to: "/testing/vulnerabilities/protocol/header_cache_control",
          },
          {
            from: "/vulnerabilities/request_forgery/csrf_post_based",
            to: "/testing/vulnerabilities/request_forgery/csrf_post_based",
          },
          {
            from: "/vulnerabilities/request_forgery/ssrf_header",
            to: "/testing/vulnerabilities/request_forgery/ssrf_header",
          },
          {
            from: "/vulnerabilities/request_forgery/open_redirect",
            to: "/testing/vulnerabilities/request_forgery/open_redirect",
          },
          {
            from: "/vulnerabilities/request_forgery/ssrf",
            to: "/testing/vulnerabilities/request_forgery/ssrf",
          },
          {
            from: "/vulnerabilities/request_forgery/ssrf_partial",
            to: "/testing/vulnerabilities/request_forgery/ssrf_partial",
          },
          {
            from: "/vulnerabilities/request_forgery/csrf_get_based",
            to: "/testing/vulnerabilities/request_forgery/csrf_get_based",
          },
          {
            from: "/vulnerabilities/resource_limitation/graphql_batch_limit",
            to: "/testing/vulnerabilities/resource_limitation/graphql_batch_limit",
          },
          {
            from: "/vulnerabilities/resource_limitation/response_size",
            to: "/testing/vulnerabilities/resource_limitation/response_size",
          },
          {
            from: "/vulnerabilities/resource_limitation/graphql_depth_limit",
            to: "/testing/vulnerabilities/resource_limitation/graphql_depth_limit",
          },
          {
            from: "/vulnerabilities/resource_limitation/graphql_alias_limit",
            to: "/testing/vulnerabilities/resource_limitation/graphql_alias_limit",
          },
          {
            from: "/vulnerabilities/resource_limitation/graphql_directive_overload",
            to: "/testing/vulnerabilities/resource_limitation/graphql_directive_overload",
          },
          {
            from: "/vulnerabilities/resource_limitation/timeout",
            to: "/testing/vulnerabilities/resource_limitation/timeout",
          },
          {
            from: "/vulnerabilities/resource_limitation/graphql_width_limit",
            to: "/testing/vulnerabilities/resource_limitation/graphql_width_limit",
          },
          {
            from: "/vulnerabilities/resource_limitation/graphql_recursive_fragment",
            to: "/testing/vulnerabilities/resource_limitation/graphql_recursive_fragment",
          },
          {
            from: "/vulnerabilities/resource_limitation/graphql_field_limit",
            to: "/testing/vulnerabilities/resource_limitation/graphql_field_limit",
          },
          {
            from: "/vulnerabilities/resource_limitation/large_json_input",
            to: "/testing/vulnerabilities/resource_limitation/large_json_input",
          },
          {
            from: "/vulnerabilities/resource_limitation/unreachable_server",
            to: "/testing/vulnerabilities/resource_limitation/unreachable_server",
          },
          {
            from: "/vulnerabilities/resource_limitation/character_limit",
            to: "/testing/vulnerabilities/resource_limitation/character_limit",
          },
          {
            from: "/vulnerabilities/resource_limitation/cyclic_query",
            to: "/testing/vulnerabilities/resource_limitation/cyclic_query",
          },
          {
            from: "/vulnerabilities/resource_limitation/graphql_circular_introspection",
            to: "/testing/vulnerabilities/resource_limitation/graphql_circular_introspection",
          },
          {
            from: "/vulnerabilities/resource_limitation/pagination_missing",
            to: "/testing/vulnerabilities/resource_limitation/pagination_missing",
          },
          {
            from: "/vulnerabilities/resource_limitation/graphql_field_duplication",
            to: "/testing/vulnerabilities/resource_limitation/graphql_field_duplication",
          },
          {
            from: "/vulnerabilities/schema/weak_json_typing",
            to: "/testing/vulnerabilities/schema/weak_json_typing",
          },
          {
            from: "/vulnerabilities/schema/zombie_object",
            to: "/testing/vulnerabilities/schema/zombie_object",
          },
          {
            from: "/vulnerabilities/schema/duplicated_object",
            to: "/testing/vulnerabilities/schema/duplicated_object",
          },
          {
            from: "/vulnerabilities/schema/response_type_missmatch",
            to: "/testing/vulnerabilities/schema/response_type_missmatch",
          },
          {
            from: "/vulnerabilities/schema/invalid_refs",
            to: "/testing/vulnerabilities/schema/invalid_refs",
          },
          {
            from: "/vulnerabilities/schema/invalid_allof",
            to: "/testing/vulnerabilities/schema/invalid_allof",
          },
          {
            from: "/vulnerabilities/schema/positive_integer_validation",
            to: "/testing/vulnerabilities/schema/positive_integer_validation",
          },
          {
            from: "/vulnerabilities/schema/swagger_rules",
            to: "/testing/vulnerabilities/schema/swagger_rules",
          },
          {
            from: "/vulnerabilities/schema/undefined_object",
            to: "/testing/vulnerabilities/schema/undefined_object",
          },
          {
            from: "/vulnerabilities/schema/graphql_response_format",
            to: "/testing/vulnerabilities/schema/graphql_response_format",
          },
          {
            from: "/vulnerabilities/schema/self_compliant_spec",
            to: "/testing/vulnerabilities/schema/self_compliant_spec",
          },
          {
            from: "/vulnerabilities/schema/invalid_parameters_in_path",
            to: "/testing/vulnerabilities/schema/invalid_parameters_in_path",
          },
          {
            from: "/vulnerabilities/schema/typing_misconfiguration",
            to: "/testing/vulnerabilities/schema/typing_misconfiguration",
          },
          {
            from: "/vulnerabilities/injection/improper_input",
            to: "/testing/vulnerabilities/injection/improper_input",
          },
          {
            from: "/vulnerabilities/injection/jwt_alg_none",
            to: "/testing/vulnerabilities/injection/jwt_alg_none",
          },
          {
            from: "/vulnerabilities/injection/ssti",
            to: "/testing/vulnerabilities/injection/ssti",
          },
          {
            from: "/vulnerabilities/injection/sql",
            to: "/testing/vulnerabilities/injection/sql",
          },
          {
            from: "/vulnerabilities/injection/jwt_alg_confusion",
            to: "/testing/vulnerabilities/injection/jwt_alg_confusion",
          },
          {
            from: "/vulnerabilities/injection/directory_traversal",
            to: "/testing/vulnerabilities/injection/directory_traversal",
          },
          {
            from: "/vulnerabilities/injection/file_inclusion",
            to: "/testing/vulnerabilities/injection/file_inclusion",
          },
          {
            from: "/vulnerabilities/injection/nosql",
            to: "/testing/vulnerabilities/injection/nosql",
          },
          {
            from: "/vulnerabilities/injection/jwt_sign_check",
            to: "/testing/vulnerabilities/injection/jwt_sign_check",
          },
          {
            from: "/vulnerabilities/injection/mass_assignment",
            to: "/testing/vulnerabilities/injection/mass_assignment",
          },
          {
            from: "/vulnerabilities/injection/improper_input_stored",
            to: "/testing/vulnerabilities/injection/improper_input_stored",
          },
          {
            from: "/vulnerabilities/injection/command",
            to: "/testing/vulnerabilities/injection/command",
          },
          {
            from: "/vulnerabilities/injection/crlf",
            to: "/testing/vulnerabilities/injection/crlf",
          },
          {
            from: "/vulnerabilities/injection/xxe",
            to: "/testing/vulnerabilities/injection/xxe",
          },
          {
            from: "/vulnerabilities/injection/nosql_stored",
            to: "/testing/vulnerabilities/injection/nosql_stored",
          },
          {
            from: "/vulnerabilities/information_disclosure/exposed_settings.php",
            to: "/testing/vulnerabilities/information_disclosure/exposed_settings.php",
          },
          {
            from: "/vulnerabilities/information_disclosure/debug_mode",
            to: "/testing/vulnerabilities/information_disclosure/debug_mode",
          },
          {
            from: "/vulnerabilities/information_disclosure/alibaba_canal_leak",
            to: "/testing/vulnerabilities/information_disclosure/alibaba_canal_leak",
          },
          {
            from: "/vulnerabilities/information_disclosure/appveyor_config_exposure",
            to: "/testing/vulnerabilities/information_disclosure/appveyor_config_exposure",
          },
          {
            from: "/vulnerabilities/information_disclosure/file_disclosure",
            to: "/testing/vulnerabilities/information_disclosure/file_disclosure",
          },
          {
            from: "/vulnerabilities/information_disclosure/introspection_enabled",
            to: "/testing/vulnerabilities/information_disclosure/introspection_enabled",
          },
          {
            from: "/vulnerabilities/information_disclosure/data_leak",
            to: "/testing/vulnerabilities/information_disclosure/data_leak",
          },
          {
            from: "/vulnerabilities/information_disclosure/awstats_exposure",
            to: "/testing/vulnerabilities/information_disclosure/awstats_exposure",
          },
          {
            from: "/vulnerabilities/information_disclosure/code",
            to: "/testing/vulnerabilities/information_disclosure/code",
          },
          {
            from: "/vulnerabilities/information_disclosure/ansible_config_exposure",
            to: "/testing/vulnerabilities/information_disclosure/ansible_config_exposure",
          },
          {
            from: "/vulnerabilities/information_disclosure/aws_config_exposure",
            to: "/testing/vulnerabilities/information_disclosure/aws_config_exposure",
          },
          {
            from: "/vulnerabilities/information_disclosure/potential_cve",
            to: "/testing/vulnerabilities/information_disclosure/potential_cve",
          },
          {
            from: "/vulnerabilities/information_disclosure/exposed_mysql_config",
            to: "/testing/vulnerabilities/information_disclosure/exposed_mysql_config",
          },
          {
            from: "/vulnerabilities/information_disclosure/springboot_actuator_env",
            to: "/testing/vulnerabilities/information_disclosure/springboot_actuator_env",
          },
          {
            from: "/vulnerabilities/information_disclosure/graphql_field_suggestion",
            to: "/testing/vulnerabilities/information_disclosure/graphql_field_suggestion",
          },
          {
            from: "/vulnerabilities/information_disclosure/airflow_config_exposure",
            to: "/testing/vulnerabilities/information_disclosure/airflow_config_exposure",
          },
          {
            from: "/vulnerabilities/information_disclosure/stacktrace",
            to: "/testing/vulnerabilities/information_disclosure/stacktrace",
          },
          {
            from: "/vulnerabilities/information_disclosure/appspec_exposure",
            to: "/testing/vulnerabilities/information_disclosure/appspec_exposure",
          },
          {
            from: "/vulnerabilities/information_disclosure/azure_tenant_id_exposure",
            to: "/testing/vulnerabilities/information_disclosure/azure_tenant_id_exposure",
          },
          {
            from: "/vulnerabilities/information_disclosure/aws_docker_config_exposure",
            to: "/testing/vulnerabilities/information_disclosure/aws_docker_config_exposure",
          },
          {
            from: "/vulnerabilities/information_disclosure/leaking_authentication",
            to: "/testing/vulnerabilities/information_disclosure/leaking_authentication",
          },
          {
            from: "/vulnerabilities/information_disclosure/awstats_config_exposure",
            to: "/testing/vulnerabilities/information_disclosure/awstats_config_exposure",
          },
          {
            from: "/vulnerabilities/information_disclosure/exposed_sql_dumps",
            to: "/testing/vulnerabilities/information_disclosure/exposed_sql_dumps",
          },
          {
            from: "/vulnerabilities/information_disclosure/private_ip",
            to: "/testing/vulnerabilities/information_disclosure/private_ip",
          },
          {
            from: "/vulnerabilities/information_disclosure/software_component_leak",
            to: "/testing/vulnerabilities/information_disclosure/software_component_leak",
          },
          {
            from: "/vulnerabilities/access_control/private_fields",
            to: "/testing/vulnerabilities/access_control/private_fields",
          },
          {
            from: "/vulnerabilities/access_control/public_state_altering_operation",
            to: "/testing/vulnerabilities/access_control/public_state_altering_operation",
          },
          {
            from: "/vulnerabilities/access_control/bola",
            to: "/testing/vulnerabilities/access_control/bola",
          },
          {
            from: "/vulnerabilities/access_control/auth_bypass",
            to: "/testing/vulnerabilities/access_control/auth_bypass",
          },
          {
            from: "/vulnerabilities/access_control/private_data",
            to: "/testing/vulnerabilities/access_control/private_data",
          },
          {
            from: "/vulnerabilities/access_control/tenant_isolation",
            to: "/testing/vulnerabilities/access_control/tenant_isolation",
          },
          {
            from: "/vulnerabilities/access_control/sensitive_endpoint_bruteforce",
            to: "/testing/vulnerabilities/access_control/sensitive_endpoint_bruteforce",
          },
          {
            from: "/vulnerabilities/custom/security_checks",
            to: "/testing/vulnerabilities/custom/security_checks",
          },
          { from: "/ci-cd/references", to: "/testing/ci-cd/references/gitlab" },
          {
            from: "/ci-cd/references/gitlab",
            to: "/testing/ci-cd/references/gitlab",
          },
          {
            from: "/ci-cd/references/api",
            to: "/testing/ci-cd/references/api",
          },
          {
            from: "/ci-cd/references/circleci",
            to: "/testing/ci-cd/references/circleci",
          },
          {
            from: "/ci-cd/references/cli",
            to: "/testing/ci-cd/references/cli",
          },
          {
            from: "/ci-cd/references/bitbucket",
            to: "/testing/ci-cd/references/bitbucket",
          },
          {
            from: "/ci-cd/references/azure",
            to: "/testing/ci-cd/references/azure",
          },
          {
            from: "/ci-cd/references/jenkins",
            to: "/testing/ci-cd/references/jenkins",
          },
          {
            from: "/ci-cd/references/github",
            to: "/testing/ci-cd/references/github",
          },
          { from: "/ci-cd/", to: "/testing/ci-cd/" },
          {
            from: "/ci-cd/introspection-update",
            to: "/testing/ci-cd/introspection-update",
          },
          {
            from: "/ci-cd/configuration-override",
            to: "/testing/ci-cd/configuration-override",
          },
          { from: "/ci-cd/commit-sha", to: "/testing/ci-cd/commit-sha" },
          {
            from: "/features/sensitive-data",
            to: "/testing/features/sensitive-data",
          },
          {
            from: "/features/remediation",
            to: "/testing/features/remediation",
          },
          { from: "/features/", to: "/testing/features/" },
          {
            from: "/features/posture-management",
            to: "/testing/features/posture-management",
          },
          { from: "/features/reporting", to: "/testing/features/reporting" },
          { from: "/features/compliance", to: "/testing/features/compliance" },
          {
            from: "/advanced-usage/access_control",
            to: "/testing/advanced-usage/access_control",
          },
          {
            from: "/advanced-usage/internal-apis",
            to: "/testing/advanced-usage/internal-apis",
          },
          { from: "/advanced-usage/", to: "/testing/advanced-usage/" },
          {
            from: "/advanced-usage/data-types-reference",
            to: "/testing/advanced-usage/data-types-reference",
          },
          {
            from: "/advanced-usage/blacklist",
            to: "/testing/advanced-usage/blacklist",
          },
          {
            from: "/advanced-usage/rate-limiting",
            to: "/testing/advanced-usage/rate-limiting",
          },
          {
            from: "/advanced-usage/parameters-reference",
            to: "/testing/advanced-usage/parameters-reference",
          },
          {
            from: "/advanced-usage/custom-payloads",
            to: "/testing/advanced-usage/custom-payloads",
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
        defaultMode: "dark",
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
            docId: "inventory/introduction/index",
            label: "Inventory",
          },
          {
            type: "doc",
            position: "left",
            docId: "testing/getting-started/index",
            label: "Testing",
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
