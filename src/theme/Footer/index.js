import React from 'react'
import useBaseUrl from '@docusaurus/useBaseUrl'

export default function FooterWrapper(props) {
  return (
    <>
      <footer class="footer">
        <div class="wrapper">
          <div class="links">
            <div class="logo">
              <a href="/">
                <img
                  width="150"
                  src={useBaseUrl('/img/escape.svg')}
                  alt="Escape logo"
                  loading="lazy"
                />{' '}
              </a>
              <p>
                The agentless API Inventory, API Security and Attack Surface
                Management platform to secure your business.
              </p>
              <div class="soc-desktop">
                <a href="https://app.vanta.com/escape/trust/o59eptrutija9j25586wav">
                  <img
                    src={useBaseUrl('/img/soc2-badge.png')}
                    alt="Escape is Soc2 compliant"
                    class="soc"
                  />
                </a>
              </div>
              <div class="social-links">
                <a
                  class="button"
                  href="https://app.escape.tech/register/?ref=doc"
                  target="register"
                  rel="nofollow"
                >
                  Try for free
                </a>

                <a
                  class="button"
                  href="https://calendly.com/d/4q4-wkr-p8c/escape-product-demo"
                  rel="nofollow"
                >
                  Book a live demo
                </a>
              </div>
            </div>
            <div class="links-bloc">
              <div class="links-column">
                <h4>Product Use Cases</h4>
                <ul class="list">
                  <li>
                    <a href="https://escape.tech/product/#zero-configuration-needed/?ref=doc">
                      Accelerate your vulnerability assessment
                    </a>
                  </li>
                  <li>
                    <a href="https://escape.tech/product/#ci-cd-integration/?ref=doc">
                      Shift left with continous security in CI/CD
                    </a>
                  </li>
                  <li>
                    <a href="https://escape.tech/product/#api-discovery/?ref=doc">
                      Get full security observability
                    </a>
                  </li>
                  <li>
                    <a href="https://escape.tech/product/#data-exposure/?ref=doc">
                      Block unwanted data leaks
                    </a>
                  </li>
                  <li>
                    <a href="https://escape.tech/product/#account-takeover/?ref=doc">
                      Prevent account takeovers
                    </a>
                  </li>
                  <li>
                    <a href="https://escape.tech/product/#compliance/?ref=doc">
                      Simplify compliance management
                    </a>
                  </li>
                  <li>
                    <a href="https://escape.tech/product/#remediations/?ref=doc">
                      Deploy Developer-focused remediation
                    </a>
                  </li>
                  <li>
                    <a href="https://escape.tech/why-escape/?ref=doc">
                      {' '}
                      Why Escape
                    </a>
                  </li>
                </ul>
              </div>
              <div class="links-column">
                <h4>Resources</h4>
                <ul class="list">
                  <li>
                    <a href="https://escape.tech/blog/?ref=doc">Blog</a>
                  </li>
                  <li>
                    <a href="https://escape.tech/blog/tag/case-study/?ref=doc">
                      Case studies
                    </a>
                  </li>
                  <li>
                    <a href="https://docs.escape.tech/?ref=doc">Docs</a>
                  </li>
                  <li>
                    <a
                      href="https://escape.tech/academy/?ref=doc"
                      target="_blank"
                    >
                      API Security Academy
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://escape.tech/resources/state-of-graphql-security-2023/?ref=doc"
                      target="_blank"
                    >
                      State for GraphQL Security 2023
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://escape.tech/resources/state-of-public-apis-2023/?ref=doc"
                      target="_blank"
                    >
                      State of Public APIs 2023
                    </a>
                  </li>
                  <li>
                    <a href="https://escape.tech/graphql-armor/docs/getting-started/?ref=doc">
                      GraphQL Armor
                    </a>
                  </li>
                  <li>
                    <a href="https://openapi.security/?ref=doc">
                      OpenAPI Security
                    </a>
                  </li>
                  <li>
                    <a href="https://escape.tech/securegpt/?ref=doc">
                      ChatGPT Security
                    </a>
                  </li>
                  <li>
                    <a href="https://escape.tech/graphql-armor/?ref=doc">
                      GraphQL Armor
                    </a>
                  </li>
                </ul>
              </div>
              <div class="links-column">
                <div>
                  <h4>Company</h4>
                  <ul class="list">
                    <li>
                      <a href="https://escape.tech/company/?ref=doc"> About</a>
                    </li>
                    <li>
                      <a href="https://escapetechnologies.notion.site/Escape-Jobboard-v2-2daf95eb8a484cf7a6968625c328b17e">
                        We're hiring
                      </a>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4>Legal</h4>
                  <ul class="list">
                    <li>
                      <a
                        href="https://escape.tech/privacy/?ref=doc"
                        rel="nofollow"
                      >
                        Privacy policy
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://escape.tech/terms/?ref=doc"
                        rel="nofollow"
                      >
                        Terms of service
                      </a>
                    </li>
                  </ul>
                </div>
                <h4>Connect</h4>
                <ul class="list">
                  <li>
                    <a href="https://calendly.com/d/4q4-wkr-p8c/escape-product-demo">
                      {' '}
                      Book a live demo
                    </a>
                  </li>
                  <li>
                    <a href="mailto:support@escape.tech?subject=Contact Escape">
                      {' '}
                      Contact us
                    </a>
                  </li>
                  <li>
                    <a href="https://discord.com/invite/G9FEuFuKfd">
                      {' '}
                      Discord support
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div class="soc-mobile">
            <a href="https://app.vanta.com/escape/trust/o59eptrutija9j25586wav">
              <img
                src={useBaseUrl('/img/soc2-badge.png')}
                alt="Escape is Soc2 compliant"
                class="soc"
              />
            </a>
          </div>
          <div class="copyrights">
            Made with ❤️, 🥖 and ☕ in San Francisco, Paris and Biarritz.
          </div>
        </div>
      </footer>
    </>
  )
}
