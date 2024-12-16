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
          {
            from: "/getting-started/",
            to: "/api-dast/getting-started/",
          },
          {
            from: "/testing/getting-started/",
            to: "/api-dast/getting-started/",
          },
          {
            from: "/testing/getting-started/scan-results",
            to: "/api-dast/getting-started/scan-results",
          },
          {
            from: "/testing/getting-started/retrieve-schema",
            to: "/api-dast/getting-started/retrieve-schema",
          },
          {
            from: "/testing/getting-started/scan-your-first-app",
            to: "/api-dast/getting-started/scan-your-first-app",
          },
          {
            from: "/testing/getting-started/improve-scan-coverage",
            to: "/api-dast/getting-started/improve-scan-coverage",
          },
          {
            from: "/testing/getting-started/scan-scheduling",
            to: "/api-dast/getting-started/scan-scheduling",
          },
          {
            from: "/testing/custom-rules/Seeders",
            to: "/api-dast/custom-rules/Seeders",
          },
          {
            from: "/testing/custom-rules/",
            to: "/api-dast/custom-rules/",
          },
          {
            from: "/testing/custom-rules/Mutators",
            to: "/api-dast/custom-rules/Mutators",
          },
          {
            from: "/testing/custom-rules/Transformations",
            to: "/api-dast/custom-rules/Transformations",
          },
          {
            from: "/testing/custom-rules/Alerting",
            to: "/api-dast/custom-rules/Alerting",
          },
          {
            from: "/testing/custom-rules/Reference",
            to: "/api-dast/custom-rules/Reference",
          },
          {
            from: "/testing/custom-rules/Detectors",
            to: "/api-dast/custom-rules/Detectors",
          },
          {
            from: "/testing/authentication/reference/",
            to: "/api-dast/authentication/reference/",
          },
          {
            from: "/testing/authentication/advanced/",
            to: "/api-dast/authentication/advanced/",
          },
          {
            from: "/testing/authentication/",
            to: "/api-dast/authentication/",
          },
          {
            from: "/testing/authentication/presets/awscognito",
            to: "/api-dast/authentication/presets/awscognito",
          },
          {
            from: "/testing/authentication/presets/http",
            to: "/api-dast/authentication/presets/http",
          },
          {
            from: "/testing/authentication/presets/oauthclientcredentials",
            to: "/api-dast/authentication/presets/oauthclientcredentials",
          },
          {
            from: "/testing/authentication/presets/basic",
            to: "/api-dast/authentication/presets/basic",
          },
          {
            from: "/testing/authentication/presets/webdriver",
            to: "/api-dast/authentication/presets/playwright",
          },
          {
            from: "/testing/authentication/presets/headers",
            to: "/api-dast/authentication/presets/headers",
          },
          {
            from: "/testing/authentication/presets/oauthuserpassword",
            to: "/api-dast/authentication/presets/oauthuserpassword",
          },
          {
            from: "/testing/authentication/presets/curl",
            to: "/api-dast/authentication/presets/curl",
          },
          {
            from: "/testing/authentication/presets/digest",
            to: "/api-dast/authentication/presets/digest",
          },
          {
            from: "/testing/authentication/presets/graphql",
            to: "/api-dast/authentication/presets/graphql",
          },
          {
            from: "/testing/authentication/presets/curlsequence",
            to: "/api-dast/authentication/presets/curlsequence",
          },
          {
            from: "/testing/vulnerabilities/configuration/directory_listing",
            to: "/platform/reference/vulnerabilities/configuration/directory_listing",
          },
          {
            from: "/testing/vulnerabilities/configuration/error_type_inconsistency",
            to: "/platform/reference/vulnerabilities/configuration/error_type_inconsistency",
          },
          {
            from: "/testing/vulnerabilities/configuration/unhandled_endpoint",
            to: "/platform/reference/vulnerabilities/configuration/unhandled_endpoint",
          },
          {
            from: "/testing/vulnerabilities/configuration/ide_enabled",
            to: "/platform/reference/vulnerabilities/configuration/ide_enabled",
          },
          {
            from: "/testing/vulnerabilities/configuration/waf_bypass",
            to: "/platform/reference/vulnerabilities/configuration/waf_bypass",
          },
          {
            from: "/testing/vulnerabilities/configuration/graphql_apq",
            to: "/platform/reference/vulnerabilities/configuration/graphql_apq",
          },
          {
            from: "/testing/vulnerabilities/configuration/proxy_disclosure",
            to: "/platform/reference/vulnerabilities/configuration/proxy_disclosure",
          },
          {
            from: "/testing/vulnerabilities/",
            to: "/platform/reference/vulnerabilities/",
          },
          {
            from: "/testing/vulnerabilities/protocol/heartbleed",
            to: "/platform/reference/vulnerabilities/protocol/heartbleed",
          },
          {
            from: "/testing/vulnerabilities/protocol/header_access_control_allow_origin",
            to: "/platform/reference/vulnerabilities/protocol/header_access_control_allow_origin",
          },
          {
            from: "/testing/vulnerabilities/protocol/header_strict_transport_security",
            to: "/platform/reference/vulnerabilities/protocol/header_strict_transport_security",
          },
          {
            from: "/testing/vulnerabilities/protocol/ssl_certificate",
            to: "/platform/reference/vulnerabilities/protocol/ssl_certificate",
          },
          {
            from: "/testing/vulnerabilities/protocol/header_content_security_policy",
            to: "/platform/reference/vulnerabilities/protocol/header_content_security_policy",
          },
          {
            from: "/testing/vulnerabilities/protocol/header_x_frame_options",
            to: "/platform/reference/vulnerabilities/protocol/header_x_frame_options",
          },
          {
            from: "/testing/vulnerabilities/protocol/headers",
            to: "/platform/reference/vulnerabilities/protocol/headers",
          },
          {
            from: "/testing/vulnerabilities/protocol/header_set_cookie",
            to: "/platform/reference/vulnerabilities/protocol/header_set_cookie",
          },
          {
            from: "/testing/vulnerabilities/protocol/cors",
            to: "/platform/reference/vulnerabilities/protocol/cors",
          },
          {
            from: "/testing/vulnerabilities/protocol/header_leak",
            to: "/platform/reference/vulnerabilities/protocol/header_leak",
          },
          {
            from: "/testing/vulnerabilities/protocol/header_x_content_type_options",
            to: "/platform/reference/vulnerabilities/protocol/header_x_content_type_options",
          },
          {
            from: "/testing/vulnerabilities/protocol/graphql_content_type",
            to: "/platform/reference/vulnerabilities/protocol/graphql_content_type",
          },
          {
            from: "/testing/vulnerabilities/protocol/server_error",
            to: "/platform/reference/vulnerabilities/protocol/server_error",
          },
          {
            from: "/testing/vulnerabilities/protocol/header_content_type",
            to: "/platform/reference/vulnerabilities/protocol/header_content_type",
          },
          {
            from: "/testing/vulnerabilities/protocol/ssl",
            to: "/platform/reference/vulnerabilities/protocol/ssl",
          },
          {
            from: "/testing/vulnerabilities/protocol/header_cache_control",
            to: "/platform/reference/vulnerabilities/protocol/header_cache_control",
          },
          {
            from: "/testing/vulnerabilities/request_forgery/csrf_post_based",
            to: "/platform/reference/vulnerabilities/request_forgery/csrf_post_based",
          },
          {
            from: "/testing/vulnerabilities/request_forgery/ssrf_header",
            to: "/platform/reference/vulnerabilities/request_forgery/ssrf_header",
          },
          {
            from: "/testing/vulnerabilities/request_forgery/open_redirect",
            to: "/platform/reference/vulnerabilities/request_forgery/open_redirect",
          },
          {
            from: "/testing/vulnerabilities/request_forgery/ssrf",
            to: "/platform/reference/vulnerabilities/request_forgery/ssrf",
          },
          {
            from: "/testing/vulnerabilities/request_forgery/ssrf_partial",
            to: "/platform/reference/vulnerabilities/request_forgery/ssrf_partial",
          },
          {
            from: "/testing/vulnerabilities/request_forgery/csrf_get_based",
            to: "/platform/reference/vulnerabilities/request_forgery/csrf_get_based",
          },
          {
            from: "/testing/vulnerabilities/resource_limitation/graphql_batch_limit",
            to: "/platform/reference/vulnerabilities/resource_limitation/graphql_batch_limit",
          },
          {
            from: "/testing/vulnerabilities/resource_limitation/response_size",
            to: "/platform/reference/vulnerabilities/resource_limitation/response_size",
          },
          {
            from: "/testing/vulnerabilities/resource_limitation/graphql_depth_limit",
            to: "/platform/reference/vulnerabilities/resource_limitation/graphql_depth_limit",
          },
          {
            from: "/testing/vulnerabilities/resource_limitation/graphql_alias_limit",
            to: "/platform/reference/vulnerabilities/resource_limitation/graphql_alias_limit",
          },
          {
            from: "/testing/vulnerabilities/resource_limitation/graphql_directive_overload",
            to: "/platform/reference/vulnerabilities/resource_limitation/graphql_directive_overload",
          },
          {
            from: "/testing/vulnerabilities/resource_limitation/timeout",
            to: "/platform/reference/vulnerabilities/resource_limitation/timeout",
          },
          {
            from: "/testing/vulnerabilities/resource_limitation/graphql_width_limit",
            to: "/platform/reference/vulnerabilities/resource_limitation/graphql_width_limit",
          },
          {
            from: "/testing/vulnerabilities/resource_limitation/graphql_recursive_fragment",
            to: "/platform/reference/vulnerabilities/resource_limitation/graphql_recursive_fragment",
          },
          {
            from: "/testing/vulnerabilities/resource_limitation/graphql_field_limit",
            to: "/platform/reference/vulnerabilities/resource_limitation/graphql_field_limit",
          },
          {
            from: "/testing/vulnerabilities/resource_limitation/large_json_input",
            to: "/platform/reference/vulnerabilities/resource_limitation/large_json_input",
          },
          {
            from: "/testing/vulnerabilities/resource_limitation/unreachable_server",
            to: "/platform/reference/vulnerabilities/resource_limitation/unreachable_server",
          },
          {
            from: "/testing/vulnerabilities/resource_limitation/character_limit",
            to: "/platform/reference/vulnerabilities/resource_limitation/character_limit",
          },
          {
            from: "/testing/vulnerabilities/resource_limitation/cyclic_query",
            to: "/platform/reference/vulnerabilities/resource_limitation/cyclic_query",
          },
          {
            from: "/testing/vulnerabilities/resource_limitation/graphql_circular_introspection",
            to: "/platform/reference/vulnerabilities/resource_limitation/graphql_circular_introspection",
          },
          {
            from: "/testing/vulnerabilities/resource_limitation/pagination_missing",
            to: "/platform/reference/vulnerabilities/resource_limitation/pagination_missing",
          },
          {
            from: "/testing/vulnerabilities/resource_limitation/graphql_field_duplication",
            to: "/platform/reference/vulnerabilities/resource_limitation/graphql_field_duplication",
          },
          {
            from: "/testing/vulnerabilities/schema/weak_json_typing",
            to: "/platform/reference/vulnerabilities/schema/weak_json_typing",
          },
          {
            from: "/testing/vulnerabilities/schema/zombie_object",
            to: "/platform/reference/vulnerabilities/schema/zombie_object",
          },
          {
            from: "/testing/vulnerabilities/schema/duplicated_object",
            to: "/platform/reference/vulnerabilities/schema/duplicated_object",
          },
          {
            from: "/testing/vulnerabilities/schema/response_type_missmatch",
            to: "/platform/reference/vulnerabilities/schema/response_type_missmatch",
          },
          {
            from: "/testing/vulnerabilities/schema/invalid_refs",
            to: "/platform/reference/vulnerabilities/schema/invalid_refs",
          },
          {
            from: "/testing/vulnerabilities/schema/invalid_allof",
            to: "/platform/reference/vulnerabilities/schema/invalid_allof",
          },
          {
            from: "/testing/vulnerabilities/schema/positive_integer_validation",
            to: "/platform/reference/vulnerabilities/schema/positive_integer_validation",
          },
          {
            from: "/testing/vulnerabilities/schema/swagger_rules",
            to: "/platform/reference/vulnerabilities/schema/swagger_rules",
          },
          {
            from: "/testing/vulnerabilities/schema/undefined_object",
            to: "/platform/reference/vulnerabilities/schema/undefined_object",
          },
          {
            from: "/testing/vulnerabilities/schema/graphql_response_format",
            to: "/platform/reference/vulnerabilities/schema/graphql_response_format",
          },
          {
            from: "/testing/vulnerabilities/schema/self_compliant_spec",
            to: "/platform/reference/vulnerabilities/schema/self_compliant_spec",
          },
          {
            from: "/testing/vulnerabilities/schema/invalid_parameters_in_path",
            to: "/platform/reference/vulnerabilities/schema/invalid_parameters_in_path",
          },
          {
            from: "/testing/vulnerabilities/schema/typing_misconfiguration",
            to: "/platform/reference/vulnerabilities/schema/typing_misconfiguration",
          },
          {
            from: "/testing/vulnerabilities/injection/improper_input",
            to: "/platform/reference/vulnerabilities/injection/improper_input",
          },
          {
            from: "/testing/vulnerabilities/injection/jwt_alg_none",
            to: "/platform/reference/vulnerabilities/injection/jwt_alg_none",
          },
          {
            from: "/testing/vulnerabilities/injection/ssti",
            to: "/platform/reference/vulnerabilities/injection/ssti",
          },
          {
            from: "/testing/vulnerabilities/injection/sql",
            to: "/platform/reference/vulnerabilities/injection/sql",
          },
          {
            from: "/testing/vulnerabilities/injection/jwt_alg_confusion",
            to: "/platform/reference/vulnerabilities/injection/jwt_alg_confusion",
          },
          {
            from: "/testing/vulnerabilities/injection/directory_traversal",
            to: "/platform/reference/vulnerabilities/injection/directory_traversal",
          },
          {
            from: "/testing/vulnerabilities/injection/file_inclusion",
            to: "/platform/reference/vulnerabilities/injection/file_inclusion",
          },
          {
            from: "/testing/vulnerabilities/injection/nosql",
            to: "/platform/reference/vulnerabilities/injection/nosql",
          },
          {
            from: "/testing/vulnerabilities/injection/jwt_sign_check",
            to: "/platform/reference/vulnerabilities/injection/jwt_sign_check",
          },
          {
            from: "/testing/vulnerabilities/injection/mass_assignment",
            to: "/platform/reference/vulnerabilities/injection/mass_assignment",
          },
          {
            from: "/testing/vulnerabilities/injection/improper_input_stored",
            to: "/platform/reference/vulnerabilities/injection/improper_input_stored",
          },
          {
            from: "/testing/vulnerabilities/injection/command",
            to: "/platform/reference/vulnerabilities/injection/command",
          },
          {
            from: "/testing/vulnerabilities/injection/crlf",
            to: "/platform/reference/vulnerabilities/injection/crlf",
          },
          {
            from: "/testing/vulnerabilities/injection/xxe",
            to: "/platform/reference/vulnerabilities/injection/xxe",
          },
          {
            from: "/testing/vulnerabilities/injection/nosql_stored",
            to: "/platform/reference/vulnerabilities/injection/nosql_stored",
          },
          {
            from: "/testing/vulnerabilities/information_disclosure/exposed_settings.php",
            to: "/platform/reference/vulnerabilities/information_disclosure/exposed_settings.php",
          },
          {
            from: "/testing/vulnerabilities/information_disclosure/debug_mode",
            to: "/platform/reference/vulnerabilities/information_disclosure/debug_mode",
          },
          {
            from: "/testing/vulnerabilities/information_disclosure/alibaba_canal_leak",
            to: "/platform/reference/vulnerabilities/information_disclosure/alibaba_canal_leak",
          },
          {
            from: "/testing/vulnerabilities/information_disclosure/appveyor_config_exposure",
            to: "/platform/reference/vulnerabilities/information_disclosure/appveyor_config_exposure",
          },
          {
            from: "/testing/vulnerabilities/information_disclosure/file_disclosure",
            to: "/platform/reference/vulnerabilities/information_disclosure/file_disclosure",
          },
          {
            from: "/testing/vulnerabilities/information_disclosure/introspection_enabled",
            to: "/platform/reference/vulnerabilities/information_disclosure/introspection_enabled",
          },
          {
            from: "/testing/vulnerabilities/information_disclosure/data_leak",
            to: "/platform/reference/vulnerabilities/information_disclosure/data_leak",
          },
          {
            from: "/testing/vulnerabilities/information_disclosure/awstats_exposure",
            to: "/platform/reference/vulnerabilities/information_disclosure/awstats_exposure",
          },
          {
            from: "/testing/vulnerabilities/information_disclosure/code",
            to: "/platform/reference/vulnerabilities/information_disclosure/code",
          },
          {
            from: "/testing/vulnerabilities/information_disclosure/ansible_config_exposure",
            to: "/platform/reference/vulnerabilities/information_disclosure/ansible_config_exposure",
          },
          {
            from: "/testing/vulnerabilities/information_disclosure/aws_config_exposure",
            to: "/platform/reference/vulnerabilities/information_disclosure/aws_config_exposure",
          },
          {
            from: "/testing/vulnerabilities/information_disclosure/potential_cve",
            to: "/platform/reference/vulnerabilities/information_disclosure/potential_cve",
          },
          {
            from: "/testing/vulnerabilities/information_disclosure/exposed_mysql_config",
            to: "/platform/reference/vulnerabilities/information_disclosure/exposed_mysql_config",
          },
          {
            from: "/testing/vulnerabilities/information_disclosure/springboot_actuator_env",
            to: "/platform/reference/vulnerabilities/information_disclosure/springboot_actuator_env",
          },
          {
            from: "/testing/vulnerabilities/information_disclosure/graphql_field_suggestion",
            to: "/platform/reference/vulnerabilities/information_disclosure/graphql_field_suggestion",
          },
          {
            from: "/testing/vulnerabilities/information_disclosure/airflow_config_exposure",
            to: "/platform/reference/vulnerabilities/information_disclosure/airflow_config_exposure",
          },
          {
            from: "/testing/vulnerabilities/information_disclosure/stacktrace",
            to: "/platform/reference/vulnerabilities/information_disclosure/stacktrace",
          },
          {
            from: "/testing/vulnerabilities/information_disclosure/appspec_exposure",
            to: "/platform/reference/vulnerabilities/information_disclosure/appspec_exposure",
          },
          {
            from: "/testing/vulnerabilities/information_disclosure/azure_tenant_id_exposure",
            to: "/platform/reference/vulnerabilities/information_disclosure/azure_tenant_id_exposure",
          },
          {
            from: "/testing/vulnerabilities/information_disclosure/aws_docker_config_exposure",
            to: "/platform/reference/vulnerabilities/information_disclosure/aws_docker_config_exposure",
          },
          {
            from: "/testing/vulnerabilities/information_disclosure/leaking_authentication",
            to: "/platform/reference/vulnerabilities/information_disclosure/leaking_authentication",
          },
          {
            from: "/testing/vulnerabilities/information_disclosure/awstats_config_exposure",
            to: "/platform/reference/vulnerabilities/information_disclosure/awstats_config_exposure",
          },
          {
            from: "/testing/vulnerabilities/information_disclosure/exposed_sql_dumps",
            to: "/platform/reference/vulnerabilities/information_disclosure/exposed_sql_dumps",
          },
          {
            from: "/testing/vulnerabilities/information_disclosure/private_ip",
            to: "/platform/reference/vulnerabilities/information_disclosure/private_ip",
          },
          {
            from: "/testing/vulnerabilities/information_disclosure/software_component_leak",
            to: "/platform/reference/vulnerabilities/information_disclosure/software_component_leak",
          },
          {
            from: "/testing/vulnerabilities/access_control/private_fields",
            to: "/platform/reference/vulnerabilities/access_control/private_fields",
          },
          {
            from: "/testing/vulnerabilities/access_control/public_state_altering_operation",
            to: "/platform/reference/vulnerabilities/access_control/public_state_altering_operation",
          },
          {
            from: "/testing/vulnerabilities/access_control/bola",
            to: "/platform/reference/vulnerabilities/access_control/bola",
          },
          {
            from: "/testing/vulnerabilities/access_control/auth_bypass",
            to: "/platform/reference/vulnerabilities/access_control/auth_bypass",
          },
          {
            from: "/testing/vulnerabilities/access_control/private_data",
            to: "/platform/reference/vulnerabilities/access_control/private_data",
          },
          {
            from: "/testing/vulnerabilities/access_control/tenant_isolation",
            to: "/platform/reference/vulnerabilities/access_control/tenant_isolation",
          },
          {
            from: "/testing/vulnerabilities/access_control/sensitive_endpoint_bruteforce",
            to: "/platform/reference/vulnerabilities/access_control/sensitive_endpoint_bruteforce",
          },
          {
            from: "/testing/vulnerabilities/custom/security_checks",
            to: "/platform/reference/vulnerabilities/custom/security_checks",
          },
          {
            from: "/testing/ci-cd/references/gitlab",
            to: "/api-dast/ci-cd/references/gitlab",
          },
          {
            from: "/testing/ci-cd/references/gitlab",
            to: "/api-dast/ci-cd/references/gitlab",
          },
          {
            from: "/testing/ci-cd/references/circleci",
            to: "/api-dast/ci-cd/references/circleci",
          },
          {
            from: "/testing/ci-cd/references/cli",
            to: "/api-dast/ci-cd/references/cli",
          },
          {
            from: "/testing/ci-cd/references/bitbucket",
            to: "/api-dast/ci-cd/references/bitbucket",
          },
          {
            from: "/testing/ci-cd/references/azure",
            to: "/api-dast/ci-cd/references/azure",
          },
          {
            from: "/testing/ci-cd/references/jenkins",
            to: "/api-dast/ci-cd/references/jenkins",
          },
          {
            from: "/testing/ci-cd/references/github",
            to: "/api-dast/ci-cd/references/github",
          },
          {
            from: "/testing/ci-cd/",
            to: "/api-dast/ci-cd/",
          },
          {
            from: "/testing/ci-cd/introspection-update",
            to: "/api-dast/ci-cd/introspection-update",
          },
          {
            from: "/testing/ci-cd/configuration-override",
            to: "/api-dast/ci-cd/configuration-override",
          },
          {
            from: "/testing/ci-cd/commit-sha",
            to: "/api-dast/ci-cd/commit-sha",
          },
          {
            from: "/testing/features/sensitive-data",
            to: "/api-dast/features/sensitive-data",
          },
          {
            from: "/testing/features/remediation",
            to: "/api-dast/features/remediation",
          },
          {
            from: "/testing/features/",
            to: "/api-dast/features/",
          },
          {
            from: "/testing/features/posture-management",
            to: "/api-dast/features/posture-management",
          },
          {
            from: "/testing/features/reporting",
            to: "/api-dast/features/reporting",
          },
          {
            from: "/testing/features/compliance",
            to: "/api-dast/features/compliance",
          },
          {
            from: "/testing/advanced-usage/access_control",
            to: "/api-dast/advanced-usage/access_control",
          },
          {
            from: "/testing/advanced-usage/internal-apis",
            to: "/api-dast/advanced-usage/internal-apis",
          },
          {
            from: "/testing/advanced-usage/",
            to: "/api-dast/advanced-usage/",
          },
          {
            from: "/testing/advanced-usage/blacklist",
            to: "/api-dast/advanced-usage/blacklist",
          },
          {
            from: "/testing/advanced-usage/rate-limiting",
            to: "/api-dast/advanced-usage/rate-limiting",
          },
          {
            from: "/testing/advanced-usage/parameters-reference",
            to: "/api-dast/advanced-usage/parameters-reference",
          },
          {
            from: "/testing/advanced-usage/custom-payloads",
            to: "/api-dast/advanced-usage/custom-payloads",
          }, // end of redirect from testing to api-dast
          // start of redirect from legacy nothing directly to api-dast
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
            to: "/api-dast/authentication/presets/playwright",
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
            to: "/platform/reference/vulnerabilities/configuration/directory_listing",
          },
          {
            from: "/vulnerabilities/configuration/error_type_inconsistency",
            to: "/platform/reference/vulnerabilities/configuration/error_type_inconsistency",
          },
          {
            from: "/vulnerabilities/configuration/unhandled_endpoint",
            to: "/platform/reference/vulnerabilities/configuration/unhandled_endpoint",
          },
          {
            from: "/vulnerabilities/configuration/ide_enabled",
            to: "/platform/reference/vulnerabilities/configuration/ide_enabled",
          },
          {
            from: "/vulnerabilities/configuration/waf_bypass",
            to: "/platform/reference/vulnerabilities/configuration/waf_bypass",
          },
          {
            from: "/vulnerabilities/configuration/graphql_apq",
            to: "/platform/reference/vulnerabilities/configuration/graphql_apq",
          },
          {
            from: "/vulnerabilities/configuration/proxy_disclosure",
            to: "/platform/reference/vulnerabilities/configuration/proxy_disclosure",
          },
          { from: "/vulnerabilities/", to: "/platform/reference/vulnerabilities/" },
          {
            from: "/vulnerabilities/protocol/heartbleed",
            to: "/platform/reference/vulnerabilities/protocol/heartbleed",
          },
          {
            from: "/vulnerabilities/protocol/header_access_control_allow_origin",
            to: "/platform/reference/vulnerabilities/protocol/header_access_control_allow_origin",
          },
          {
            from: "/vulnerabilities/protocol/header_strict_transport_security",
            to: "/platform/reference/vulnerabilities/protocol/header_strict_transport_security",
          },
          {
            from: "/vulnerabilities/protocol/ssl_certificate",
            to: "/platform/reference/vulnerabilities/protocol/ssl_certificate",
          },
          {
            from: "/vulnerabilities/protocol/header_content_security_policy",
            to: "/platform/reference/vulnerabilities/protocol/header_content_security_policy",
          },
          {
            from: "/vulnerabilities/protocol/header_x_frame_options",
            to: "/platform/reference/vulnerabilities/protocol/header_x_frame_options",
          },
          {
            from: "/vulnerabilities/protocol/headers",
            to: "/platform/reference/vulnerabilities/protocol/headers",
          },
          {
            from: "/vulnerabilities/protocol/header_set_cookie",
            to: "/platform/reference/vulnerabilities/protocol/header_set_cookie",
          },
          {
            from: "/vulnerabilities/protocol/cors",
            to: "/platform/reference/vulnerabilities/protocol/cors",
          },
          {
            from: "/vulnerabilities/protocol/header_leak",
            to: "/platform/reference/vulnerabilities/protocol/header_leak",
          },
          {
            from: "/vulnerabilities/protocol/header_x_content_type_options",
            to: "/platform/reference/vulnerabilities/protocol/header_x_content_type_options",
          },
          {
            from: "/vulnerabilities/protocol/graphql_content_type",
            to: "/platform/reference/vulnerabilities/protocol/graphql_content_type",
          },
          {
            from: "/vulnerabilities/protocol/server_error",
            to: "/platform/reference/vulnerabilities/protocol/server_error",
          },
          {
            from: "/vulnerabilities/protocol/header_content_type",
            to: "/platform/reference/vulnerabilities/protocol/header_content_type",
          },
          {
            from: "/vulnerabilities/protocol/ssl",
            to: "/platform/reference/vulnerabilities/protocol/ssl",
          },
          {
            from: "/vulnerabilities/protocol/header_cache_control",
            to: "/platform/reference/vulnerabilities/protocol/header_cache_control",
          },
          {
            from: "/vulnerabilities/request_forgery/csrf_post_based",
            to: "/platform/reference/vulnerabilities/request_forgery/csrf_post_based",
          },
          {
            from: "/vulnerabilities/request_forgery/ssrf_header",
            to: "/platform/reference/vulnerabilities/request_forgery/ssrf_header",
          },
          {
            from: "/vulnerabilities/request_forgery/open_redirect",
            to: "/platform/reference/vulnerabilities/request_forgery/open_redirect",
          },
          {
            from: "/vulnerabilities/request_forgery/ssrf",
            to: "/platform/reference/vulnerabilities/request_forgery/ssrf",
          },
          {
            from: "/vulnerabilities/request_forgery/ssrf_partial",
            to: "/platform/reference/vulnerabilities/request_forgery/ssrf_partial",
          },
          {
            from: "/vulnerabilities/request_forgery/csrf_get_based",
            to: "/platform/reference/vulnerabilities/request_forgery/csrf_get_based",
          },
          {
            from: "/vulnerabilities/resource_limitation/graphql_batch_limit",
            to: "/platform/reference/vulnerabilities/resource_limitation/graphql_batch_limit",
          },
          {
            from: "/vulnerabilities/resource_limitation/response_size",
            to: "/platform/reference/vulnerabilities/resource_limitation/response_size",
          },
          {
            from: "/vulnerabilities/resource_limitation/graphql_depth_limit",
            to: "/platform/reference/vulnerabilities/resource_limitation/graphql_depth_limit",
          },
          {
            from: "/vulnerabilities/resource_limitation/graphql_alias_limit",
            to: "/platform/reference/vulnerabilities/resource_limitation/graphql_alias_limit",
          },
          {
            from: "/vulnerabilities/resource_limitation/graphql_directive_overload",
            to: "/platform/reference/vulnerabilities/resource_limitation/graphql_directive_overload",
          },
          {
            from: "/vulnerabilities/resource_limitation/timeout",
            to: "/platform/reference/vulnerabilities/resource_limitation/timeout",
          },
          {
            from: "/vulnerabilities/resource_limitation/graphql_width_limit",
            to: "/platform/reference/vulnerabilities/resource_limitation/graphql_width_limit",
          },
          {
            from: "/vulnerabilities/resource_limitation/graphql_recursive_fragment",
            to: "/platform/reference/vulnerabilities/resource_limitation/graphql_recursive_fragment",
          },
          {
            from: "/vulnerabilities/resource_limitation/graphql_field_limit",
            to: "/platform/reference/vulnerabilities/resource_limitation/graphql_field_limit",
          },
          {
            from: "/vulnerabilities/resource_limitation/large_json_input",
            to: "/platform/reference/vulnerabilities/resource_limitation/large_json_input",
          },
          {
            from: "/vulnerabilities/resource_limitation/unreachable_server",
            to: "/platform/reference/vulnerabilities/resource_limitation/unreachable_server",
          },
          {
            from: "/vulnerabilities/resource_limitation/character_limit",
            to: "/platform/reference/vulnerabilities/resource_limitation/character_limit",
          },
          {
            from: "/vulnerabilities/resource_limitation/cyclic_query",
            to: "/platform/reference/vulnerabilities/resource_limitation/cyclic_query",
          },
          {
            from: "/vulnerabilities/resource_limitation/graphql_circular_introspection",
            to: "/platform/reference/vulnerabilities/resource_limitation/graphql_circular_introspection",
          },
          {
            from: "/vulnerabilities/resource_limitation/pagination_missing",
            to: "/platform/reference/vulnerabilities/resource_limitation/pagination_missing",
          },
          {
            from: "/vulnerabilities/resource_limitation/graphql_field_duplication",
            to: "/platform/reference/vulnerabilities/resource_limitation/graphql_field_duplication",
          },
          {
            from: "/vulnerabilities/schema/weak_json_typing",
            to: "/platform/reference/vulnerabilities/schema/weak_json_typing",
          },
          {
            from: "/vulnerabilities/schema/zombie_object",
            to: "/platform/reference/vulnerabilities/schema/zombie_object",
          },
          {
            from: "/vulnerabilities/schema/duplicated_object",
            to: "/platform/reference/vulnerabilities/schema/duplicated_object",
          },
          {
            from: "/vulnerabilities/schema/response_type_missmatch",
            to: "/platform/reference/vulnerabilities/schema/response_type_missmatch",
          },
          {
            from: "/vulnerabilities/schema/invalid_refs",
            to: "/platform/reference/vulnerabilities/schema/invalid_refs",
          },
          {
            from: "/vulnerabilities/schema/invalid_allof",
            to: "/platform/reference/vulnerabilities/schema/invalid_allof",
          },
          {
            from: "/vulnerabilities/schema/positive_integer_validation",
            to: "/platform/reference/vulnerabilities/schema/positive_integer_validation",
          },
          {
            from: "/vulnerabilities/schema/swagger_rules",
            to: "/platform/reference/vulnerabilities/schema/swagger_rules",
          },
          {
            from: "/vulnerabilities/schema/undefined_object",
            to: "/platform/reference/vulnerabilities/schema/undefined_object",
          },
          {
            from: "/vulnerabilities/schema/graphql_response_format",
            to: "/platform/reference/vulnerabilities/schema/graphql_response_format",
          },
          {
            from: "/vulnerabilities/schema/self_compliant_spec",
            to: "/platform/reference/vulnerabilities/schema/self_compliant_spec",
          },
          {
            from: "/vulnerabilities/schema/invalid_parameters_in_path",
            to: "/platform/reference/vulnerabilities/schema/invalid_parameters_in_path",
          },
          {
            from: "/vulnerabilities/schema/typing_misconfiguration",
            to: "/platform/reference/vulnerabilities/schema/typing_misconfiguration",
          },
          {
            from: "/vulnerabilities/injection/improper_input",
            to: "/platform/reference/vulnerabilities/injection/improper_input",
          },
          {
            from: "/vulnerabilities/injection/jwt_alg_none",
            to: "/platform/reference/vulnerabilities/injection/jwt_alg_none",
          },
          {
            from: "/vulnerabilities/injection/ssti",
            to: "/platform/reference/vulnerabilities/injection/ssti",
          },
          {
            from: "/vulnerabilities/injection/sql",
            to: "/platform/reference/vulnerabilities/injection/sql",
          },
          {
            from: "/vulnerabilities/injection/jwt_alg_confusion",
            to: "/platform/reference/vulnerabilities/injection/jwt_alg_confusion",
          },
          {
            from: "/vulnerabilities/injection/directory_traversal",
            to: "/platform/reference/vulnerabilities/injection/directory_traversal",
          },
          {
            from: "/vulnerabilities/injection/file_inclusion",
            to: "/platform/reference/vulnerabilities/injection/file_inclusion",
          },
          {
            from: "/vulnerabilities/injection/nosql",
            to: "/platform/reference/vulnerabilities/injection/nosql",
          },
          {
            from: "/vulnerabilities/injection/jwt_sign_check",
            to: "/platform/reference/vulnerabilities/injection/jwt_sign_check",
          },
          {
            from: "/vulnerabilities/injection/mass_assignment",
            to: "/platform/reference/vulnerabilities/injection/mass_assignment",
          },
          {
            from: "/vulnerabilities/injection/improper_input_stored",
            to: "/platform/reference/vulnerabilities/injection/improper_input_stored",
          },
          {
            from: "/vulnerabilities/injection/command",
            to: "/platform/reference/vulnerabilities/injection/command",
          },
          {
            from: "/vulnerabilities/injection/crlf",
            to: "/platform/reference/vulnerabilities/injection/crlf",
          },
          {
            from: "/vulnerabilities/injection/xxe",
            to: "/platform/reference/vulnerabilities/injection/xxe",
          },
          {
            from: "/vulnerabilities/injection/nosql_stored",
            to: "/platform/reference/vulnerabilities/injection/nosql_stored",
          },
          {
            from: "/vulnerabilities/information_disclosure/exposed_settings.php",
            to: "/platform/reference/vulnerabilities/information_disclosure/exposed_settings.php",
          },
          {
            from: "/vulnerabilities/information_disclosure/debug_mode",
            to: "/platform/reference/vulnerabilities/information_disclosure/debug_mode",
          },
          {
            from: "/vulnerabilities/information_disclosure/alibaba_canal_leak",
            to: "/platform/reference/vulnerabilities/information_disclosure/alibaba_canal_leak",
          },
          {
            from: "/vulnerabilities/information_disclosure/appveyor_config_exposure",
            to: "/platform/reference/vulnerabilities/information_disclosure/appveyor_config_exposure",
          },
          {
            from: "/vulnerabilities/information_disclosure/file_disclosure",
            to: "/platform/reference/vulnerabilities/information_disclosure/file_disclosure",
          },
          {
            from: "/vulnerabilities/information_disclosure/introspection_enabled",
            to: "/platform/reference/vulnerabilities/information_disclosure/introspection_enabled",
          },
          {
            from: "/vulnerabilities/information_disclosure/data_leak",
            to: "/platform/reference/vulnerabilities/information_disclosure/data_leak",
          },
          {
            from: "/vulnerabilities/information_disclosure/awstats_exposure",
            to: "/platform/reference/vulnerabilities/information_disclosure/awstats_exposure",
          },
          {
            from: "/vulnerabilities/information_disclosure/code",
            to: "/platform/reference/vulnerabilities/information_disclosure/code",
          },
          {
            from: "/vulnerabilities/information_disclosure/ansible_config_exposure",
            to: "/platform/reference/vulnerabilities/information_disclosure/ansible_config_exposure",
          },
          {
            from: "/vulnerabilities/information_disclosure/aws_config_exposure",
            to: "/platform/reference/vulnerabilities/information_disclosure/aws_config_exposure",
          },
          {
            from: "/vulnerabilities/information_disclosure/potential_cve",
            to: "/platform/reference/vulnerabilities/information_disclosure/potential_cve",
          },
          {
            from: "/vulnerabilities/information_disclosure/exposed_mysql_config",
            to: "/platform/reference/vulnerabilities/information_disclosure/exposed_mysql_config",
          },
          {
            from: "/vulnerabilities/information_disclosure/springboot_actuator_env",
            to: "/platform/reference/vulnerabilities/information_disclosure/springboot_actuator_env",
          },
          {
            from: "/vulnerabilities/information_disclosure/graphql_field_suggestion",
            to: "/platform/reference/vulnerabilities/information_disclosure/graphql_field_suggestion",
          },
          {
            from: "/vulnerabilities/information_disclosure/airflow_config_exposure",
            to: "/platform/reference/vulnerabilities/information_disclosure/airflow_config_exposure",
          },
          {
            from: "/vulnerabilities/information_disclosure/stacktrace",
            to: "/platform/reference/vulnerabilities/information_disclosure/stacktrace",
          },
          {
            from: "/vulnerabilities/information_disclosure/appspec_exposure",
            to: "/platform/reference/vulnerabilities/information_disclosure/appspec_exposure",
          },
          {
            from: "/vulnerabilities/information_disclosure/azure_tenant_id_exposure",
            to: "/platform/reference/vulnerabilities/information_disclosure/azure_tenant_id_exposure",
          },
          {
            from: "/vulnerabilities/information_disclosure/aws_docker_config_exposure",
            to: "/platform/reference/vulnerabilities/information_disclosure/aws_docker_config_exposure",
          },
          {
            from: "/vulnerabilities/information_disclosure/leaking_authentication",
            to: "/platform/reference/vulnerabilities/information_disclosure/leaking_authentication",
          },
          {
            from: "/vulnerabilities/information_disclosure/awstats_config_exposure",
            to: "/platform/reference/vulnerabilities/information_disclosure/awstats_config_exposure",
          },
          {
            from: "/vulnerabilities/information_disclosure/exposed_sql_dumps",
            to: "/platform/reference/vulnerabilities/information_disclosure/exposed_sql_dumps",
          },
          {
            from: "/vulnerabilities/information_disclosure/private_ip",
            to: "/platform/reference/vulnerabilities/information_disclosure/private_ip",
          },
          {
            from: "/vulnerabilities/information_disclosure/software_component_leak",
            to: "/platform/reference/vulnerabilities/information_disclosure/software_component_leak",
          },
          {
            from: "/vulnerabilities/access_control/private_fields",
            to: "/platform/reference/vulnerabilities/access_control/private_fields",
          },
          {
            from: "/vulnerabilities/access_control/public_state_altering_operation",
            to: "/platform/reference/vulnerabilities/access_control/public_state_altering_operation",
          },
          {
            from: "/vulnerabilities/access_control/bola",
            to: "/platform/reference/vulnerabilities/access_control/bola",
          },
          {
            from: "/vulnerabilities/access_control/auth_bypass",
            to: "/platform/reference/vulnerabilities/access_control/auth_bypass",
          },
          {
            from: "/vulnerabilities/access_control/private_data",
            to: "/platform/reference/vulnerabilities/access_control/private_data",
          },
          {
            from: "/vulnerabilities/access_control/tenant_isolation",
            to: "/platform/reference/vulnerabilities/access_control/tenant_isolation",
          },
          {
            from: "/vulnerabilities/access_control/sensitive_endpoint_bruteforce",
            to: "/platform/reference/vulnerabilities/access_control/sensitive_endpoint_bruteforce",
          },
          {
            from: "/vulnerabilities/custom/security_checks",
            to: "/platform/reference/vulnerabilities/custom/security_checks",
          },
          {
            from: "/api-dast/vulnerabilities/configuration/directory_listing",
            to: "/platform/reference/vulnerabilities/configuration/directory_listing",
          },
          {
            from: "/api-dast/vulnerabilities/configuration/error_type_inconsistency",
            to: "/platform/reference/vulnerabilities/configuration/error_type_inconsistency",
          },
          {
            from: "/api-dast/vulnerabilities/configuration/unhandled_endpoint",
            to: "/platform/reference/vulnerabilities/configuration/unhandled_endpoint",
          },
          {
            from: "/api-dast/vulnerabilities/configuration/ide_enabled",
            to: "/platform/reference/vulnerabilities/configuration/ide_enabled",
          },
          {
            from: "/api-dast/vulnerabilities/configuration/waf_bypass",
            to: "/platform/reference/vulnerabilities/configuration/waf_bypass",
          },
          {
            from: "/api-dast/vulnerabilities/configuration/graphql_apq",
            to: "/platform/reference/vulnerabilities/configuration/graphql_apq",
          },
          {
            from: "/api-dast/vulnerabilities/configuration/proxy_disclosure",
            to: "/platform/reference/vulnerabilities/configuration/proxy_disclosure",
          },
          { from: "/api-dast/vulnerabilities/", to: "/platform/reference/vulnerabilities/" },
          {
            from: "/api-dast/vulnerabilities/protocol/heartbleed",
            to: "/platform/reference/vulnerabilities/protocol/heartbleed",
          },
          {
            from: "/api-dast/vulnerabilities/protocol/header_access_control_allow_origin",
            to: "/platform/reference/vulnerabilities/protocol/header_access_control_allow_origin",
          },
          {
            from: "/api-dast/vulnerabilities/protocol/header_strict_transport_security",
            to: "/platform/reference/vulnerabilities/protocol/header_strict_transport_security",
          },
          {
            from: "/api-dast/vulnerabilities/protocol/ssl_certificate",
            to: "/platform/reference/vulnerabilities/protocol/ssl_certificate",
          },
          {
            from: "/api-dast/vulnerabilities/protocol/header_content_security_policy",
            to: "/platform/reference/vulnerabilities/protocol/header_content_security_policy",
          },
          {
            from: "/api-dast/vulnerabilities/protocol/header_x_frame_options",
            to: "/platform/reference/vulnerabilities/protocol/header_x_frame_options",
          },
          {
            from: "/api-dast/vulnerabilities/protocol/headers",
            to: "/platform/reference/vulnerabilities/protocol/headers",
          },
          {
            from: "/api-dast/vulnerabilities/protocol/header_set_cookie",
            to: "/platform/reference/vulnerabilities/protocol/header_set_cookie",
          },
          {
            from: "/api-dast/vulnerabilities/protocol/cors",
            to: "/platform/reference/vulnerabilities/protocol/cors",
          },
          {
            from: "/api-dast/vulnerabilities/protocol/header_leak",
            to: "/platform/reference/vulnerabilities/protocol/header_leak",
          },
          {
            from: "/api-dast/vulnerabilities/protocol/header_x_content_type_options",
            to: "/platform/reference/vulnerabilities/protocol/header_x_content_type_options",
          },
          {
            from: "/api-dast/vulnerabilities/protocol/graphql_content_type",
            to: "/platform/reference/vulnerabilities/protocol/graphql_content_type",
          },
          {
            from: "/api-dast/vulnerabilities/protocol/server_error",
            to: "/platform/reference/vulnerabilities/protocol/server_error",
          },
          {
            from: "/api-dast/vulnerabilities/protocol/header_content_type",
            to: "/platform/reference/vulnerabilities/protocol/header_content_type",
          },
          {
            from: "/api-dast/vulnerabilities/protocol/ssl",
            to: "/platform/reference/vulnerabilities/protocol/ssl",
          },
          {
            from: "/api-dast/vulnerabilities/protocol/header_cache_control",
            to: "/platform/reference/vulnerabilities/protocol/header_cache_control",
          },
          {
            from: "/api-dast/vulnerabilities/request_forgery/csrf_post_based",
            to: "/platform/reference/vulnerabilities/request_forgery/csrf_post_based",
          },
          {
            from: "/api-dast/vulnerabilities/request_forgery/ssrf_header",
            to: "/platform/reference/vulnerabilities/request_forgery/ssrf_header",
          },
          {
            from: "/api-dast/vulnerabilities/request_forgery/open_redirect",
            to: "/platform/reference/vulnerabilities/request_forgery/open_redirect",
          },
          {
            from: "/api-dast/vulnerabilities/request_forgery/ssrf",
            to: "/platform/reference/vulnerabilities/request_forgery/ssrf",
          },
          {
            from: "/api-dast/vulnerabilities/request_forgery/ssrf_partial",
            to: "/platform/reference/vulnerabilities/request_forgery/ssrf_partial",
          },
          {
            from: "/api-dast/vulnerabilities/request_forgery/csrf_get_based",
            to: "/platform/reference/vulnerabilities/request_forgery/csrf_get_based",
          },
          {
            from: "/api-dast/vulnerabilities/resource_limitation/graphql_batch_limit",
            to: "/platform/reference/vulnerabilities/resource_limitation/graphql_batch_limit",
          },
          {
            from: "/api-dast/vulnerabilities/resource_limitation/response_size",
            to: "/platform/reference/vulnerabilities/resource_limitation/response_size",
          },
          {
            from: "/api-dast/vulnerabilities/resource_limitation/graphql_depth_limit",
            to: "/platform/reference/vulnerabilities/resource_limitation/graphql_depth_limit",
          },
          {
            from: "/api-dast/vulnerabilities/resource_limitation/graphql_alias_limit",
            to: "/platform/reference/vulnerabilities/resource_limitation/graphql_alias_limit",
          },
          {
            from: "/api-dast/vulnerabilities/resource_limitation/graphql_directive_overload",
            to: "/platform/reference/vulnerabilities/resource_limitation/graphql_directive_overload",
          },
          {
            from: "/api-dast/vulnerabilities/resource_limitation/timeout",
            to: "/platform/reference/vulnerabilities/resource_limitation/timeout",
          },
          {
            from: "/api-dast/vulnerabilities/resource_limitation/graphql_width_limit",
            to: "/platform/reference/vulnerabilities/resource_limitation/graphql_width_limit",
          },
          {
            from: "/api-dast/vulnerabilities/resource_limitation/graphql_recursive_fragment",
            to: "/platform/reference/vulnerabilities/resource_limitation/graphql_recursive_fragment",
          },
          {
            from: "/api-dast/vulnerabilities/resource_limitation/graphql_field_limit",
            to: "/platform/reference/vulnerabilities/resource_limitation/graphql_field_limit",
          },
          {
            from: "/api-dast/vulnerabilities/resource_limitation/large_json_input",
            to: "/platform/reference/vulnerabilities/resource_limitation/large_json_input",
          },
          {
            from: "/api-dast/vulnerabilities/resource_limitation/unreachable_server",
            to: "/platform/reference/vulnerabilities/resource_limitation/unreachable_server",
          },
          {
            from: "/api-dast/vulnerabilities/resource_limitation/character_limit",
            to: "/platform/reference/vulnerabilities/resource_limitation/character_limit",
          },
          {
            from: "/api-dast/vulnerabilities/resource_limitation/cyclic_query",
            to: "/platform/reference/vulnerabilities/resource_limitation/cyclic_query",
          },
          {
            from: "/api-dast/vulnerabilities/resource_limitation/graphql_circular_introspection",
            to: "/platform/reference/vulnerabilities/resource_limitation/graphql_circular_introspection",
          },
          {
            from: "/api-dast/vulnerabilities/resource_limitation/pagination_missing",
            to: "/platform/reference/vulnerabilities/resource_limitation/pagination_missing",
          },
          {
            from: "/api-dast/vulnerabilities/resource_limitation/graphql_field_duplication",
            to: "/platform/reference/vulnerabilities/resource_limitation/graphql_field_duplication",
          },
          {
            from: "/api-dast/vulnerabilities/schema/weak_json_typing",
            to: "/platform/reference/vulnerabilities/schema/weak_json_typing",
          },
          {
            from: "/api-dast/vulnerabilities/schema/zombie_object",
            to: "/platform/reference/vulnerabilities/schema/zombie_object",
          },
          {
            from: "/api-dast/vulnerabilities/schema/duplicated_object",
            to: "/platform/reference/vulnerabilities/schema/duplicated_object",
          },
          {
            from: "/api-dast/vulnerabilities/schema/response_type_missmatch",
            to: "/platform/reference/vulnerabilities/schema/response_type_missmatch",
          },
          {
            from: "/api-dast/vulnerabilities/schema/invalid_refs",
            to: "/platform/reference/vulnerabilities/schema/invalid_refs",
          },
          {
            from: "/api-dast/vulnerabilities/schema/invalid_allof",
            to: "/platform/reference/vulnerabilities/schema/invalid_allof",
          },
          {
            from: "/api-dast/vulnerabilities/schema/positive_integer_validation",
            to: "/platform/reference/vulnerabilities/schema/positive_integer_validation",
          },
          {
            from: "/api-dast/vulnerabilities/schema/swagger_rules",
            to: "/platform/reference/vulnerabilities/schema/swagger_rules",
          },
          {
            from: "/api-dast/vulnerabilities/schema/undefined_object",
            to: "/platform/reference/vulnerabilities/schema/undefined_object",
          },
          {
            from: "/api-dast/vulnerabilities/schema/graphql_response_format",
            to: "/platform/reference/vulnerabilities/schema/graphql_response_format",
          },
          {
            from: "/api-dast/vulnerabilities/schema/self_compliant_spec",
            to: "/platform/reference/vulnerabilities/schema/self_compliant_spec",
          },
          {
            from: "/api-dast/vulnerabilities/schema/invalid_parameters_in_path",
            to: "/platform/reference/vulnerabilities/schema/invalid_parameters_in_path",
          },
          {
            from: "/api-dast/vulnerabilities/schema/typing_misconfiguration",
            to: "/platform/reference/vulnerabilities/schema/typing_misconfiguration",
          },
          {
            from: "/api-dast/vulnerabilities/injection/improper_input",
            to: "/platform/reference/vulnerabilities/injection/improper_input",
          },
          {
            from: "/api-dast/vulnerabilities/injection/jwt_alg_none",
            to: "/platform/reference/vulnerabilities/injection/jwt_alg_none",
          },
          {
            from: "/api-dast/vulnerabilities/injection/ssti",
            to: "/platform/reference/vulnerabilities/injection/ssti",
          },
          {
            from: "/api-dast/vulnerabilities/injection/sql",
            to: "/platform/reference/vulnerabilities/injection/sql",
          },
          {
            from: "/api-dast/vulnerabilities/injection/jwt_alg_confusion",
            to: "/platform/reference/vulnerabilities/injection/jwt_alg_confusion",
          },
          {
            from: "/api-dast/vulnerabilities/injection/directory_traversal",
            to: "/platform/reference/vulnerabilities/injection/directory_traversal",
          },
          {
            from: "/api-dast/vulnerabilities/injection/file_inclusion",
            to: "/platform/reference/vulnerabilities/injection/file_inclusion",
          },
          {
            from: "/api-dast/vulnerabilities/injection/nosql",
            to: "/platform/reference/vulnerabilities/injection/nosql",
          },
          {
            from: "/api-dast/vulnerabilities/injection/jwt_sign_check",
            to: "/platform/reference/vulnerabilities/injection/jwt_sign_check",
          },
          {
            from: "/api-dast/vulnerabilities/injection/mass_assignment",
            to: "/platform/reference/vulnerabilities/injection/mass_assignment",
          },
          {
            from: "/api-dast/vulnerabilities/injection/improper_input_stored",
            to: "/platform/reference/vulnerabilities/injection/improper_input_stored",
          },
          {
            from: "/api-dast/vulnerabilities/injection/command",
            to: "/platform/reference/vulnerabilities/injection/command",
          },
          {
            from: "/api-dast/vulnerabilities/injection/crlf",
            to: "/platform/reference/vulnerabilities/injection/crlf",
          },
          {
            from: "/api-dast/vulnerabilities/injection/xxe",
            to: "/platform/reference/vulnerabilities/injection/xxe",
          },
          {
            from: "/api-dast/vulnerabilities/injection/nosql_stored",
            to: "/platform/reference/vulnerabilities/injection/nosql_stored",
          },
          {
            from: "/api-dast/vulnerabilities/information_disclosure/exposed_settings.php",
            to: "/platform/reference/vulnerabilities/information_disclosure/exposed_settings.php",
          },
          {
            from: "/api-dast/vulnerabilities/information_disclosure/debug_mode",
            to: "/platform/reference/vulnerabilities/information_disclosure/debug_mode",
          },
          {
            from: "/api-dast/vulnerabilities/information_disclosure/alibaba_canal_leak",
            to: "/platform/reference/vulnerabilities/information_disclosure/alibaba_canal_leak",
          },
          {
            from: "/api-dast/vulnerabilities/information_disclosure/appveyor_config_exposure",
            to: "/platform/reference/vulnerabilities/information_disclosure/appveyor_config_exposure",
          },
          {
            from: "/api-dast/vulnerabilities/information_disclosure/file_disclosure",
            to: "/platform/reference/vulnerabilities/information_disclosure/file_disclosure",
          },
          {
            from: "/api-dast/vulnerabilities/information_disclosure/introspection_enabled",
            to: "/platform/reference/vulnerabilities/information_disclosure/introspection_enabled",
          },
          {
            from: "/api-dast/vulnerabilities/information_disclosure/data_leak",
            to: "/platform/reference/vulnerabilities/information_disclosure/data_leak",
          },
          {
            from: "/api-dast/vulnerabilities/information_disclosure/awstats_exposure",
            to: "/platform/reference/vulnerabilities/information_disclosure/awstats_exposure",
          },
          {
            from: "/api-dast/vulnerabilities/information_disclosure/code",
            to: "/platform/reference/vulnerabilities/information_disclosure/code",
          },
          {
            from: "/api-dast/vulnerabilities/information_disclosure/ansible_config_exposure",
            to: "/platform/reference/vulnerabilities/information_disclosure/ansible_config_exposure",
          },
          {
            from: "/api-dast/vulnerabilities/information_disclosure/aws_config_exposure",
            to: "/platform/reference/vulnerabilities/information_disclosure/aws_config_exposure",
          },
          {
            from: "/api-dast/vulnerabilities/information_disclosure/potential_cve",
            to: "/platform/reference/vulnerabilities/information_disclosure/potential_cve",
          },
          {
            from: "/api-dast/vulnerabilities/information_disclosure/exposed_mysql_config",
            to: "/platform/reference/vulnerabilities/information_disclosure/exposed_mysql_config",
          },
          {
            from: "/api-dast/vulnerabilities/information_disclosure/springboot_actuator_env",
            to: "/platform/reference/vulnerabilities/information_disclosure/springboot_actuator_env",
          },
          {
            from: "/api-dast/vulnerabilities/information_disclosure/graphql_field_suggestion",
            to: "/platform/reference/vulnerabilities/information_disclosure/graphql_field_suggestion",
          },
          {
            from: "/api-dast/vulnerabilities/information_disclosure/airflow_config_exposure",
            to: "/platform/reference/vulnerabilities/information_disclosure/airflow_config_exposure",
          },
          {
            from: "/api-dast/vulnerabilities/information_disclosure/stacktrace",
            to: "/platform/reference/vulnerabilities/information_disclosure/stacktrace",
          },
          {
            from: "/api-dast/vulnerabilities/information_disclosure/appspec_exposure",
            to: "/platform/reference/vulnerabilities/information_disclosure/appspec_exposure",
          },
          {
            from: "/api-dast/vulnerabilities/information_disclosure/azure_tenant_id_exposure",
            to: "/platform/reference/vulnerabilities/information_disclosure/azure_tenant_id_exposure",
          },
          {
            from: "/api-dast/vulnerabilities/information_disclosure/aws_docker_config_exposure",
            to: "/platform/reference/vulnerabilities/information_disclosure/aws_docker_config_exposure",
          },
          {
            from: "/api-dast/vulnerabilities/information_disclosure/leaking_authentication",
            to: "/platform/reference/vulnerabilities/information_disclosure/leaking_authentication",
          },
          {
            from: "/api-dast/vulnerabilities/information_disclosure/awstats_config_exposure",
            to: "/platform/reference/vulnerabilities/information_disclosure/awstats_config_exposure",
          },
          {
            from: "/api-dast/vulnerabilities/information_disclosure/exposed_sql_dumps",
            to: "/platform/reference/vulnerabilities/information_disclosure/exposed_sql_dumps",
          },
          {
            from: "/api-dast/vulnerabilities/information_disclosure/private_ip",
            to: "/platform/reference/vulnerabilities/information_disclosure/private_ip",
          },
          {
            from: "/api-dast/vulnerabilities/information_disclosure/software_component_leak",
            to: "/platform/reference/vulnerabilities/information_disclosure/software_component_leak",
          },
          {
            from: "/api-dast/vulnerabilities/access_control/private_fields",
            to: "/platform/reference/vulnerabilities/access_control/private_fields",
          },
          {
            from: "/api-dast/vulnerabilities/access_control/public_state_altering_operation",
            to: "/platform/reference/vulnerabilities/access_control/public_state_altering_operation",
          },
          {
            from: "/api-dast/vulnerabilities/access_control/bola",
            to: "/platform/reference/vulnerabilities/access_control/bola",
          },
          {
            from: "/api-dast/vulnerabilities/access_control/auth_bypass",
            to: "/platform/reference/vulnerabilities/access_control/auth_bypass",
          },
          {
            from: "/api-dast/vulnerabilities/access_control/private_data",
            to: "/platform/reference/vulnerabilities/access_control/private_data",
          },
          {
            from: "/api-dast/vulnerabilities/access_control/tenant_isolation",
            to: "/platform/reference/vulnerabilities/access_control/tenant_isolation",
          },
          {
            from: "/api-dast/vulnerabilities/access_control/sensitive_endpoint_bruteforce",
            to: "/platform/reference/vulnerabilities/access_control/sensitive_endpoint_bruteforce",
          },
          {
            from: "/api-dast/vulnerabilities/custom/security_checks",
            to: "/platform/reference/vulnerabilities/custom/security_checks",
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
          {
            from: "/testing/features/sensitive-data",
            to: "/api-dast/features/sensitive-data",
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
