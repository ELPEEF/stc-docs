const sidebars = {
  tutorialSidebar: [
    {
      type: 'category',
      label: 'SmartWisataChain Developer Documentation',
      collapsed: false,
      items: [
        'docs/Why SmartWisataChain?',
        'docs/Quick Start',
      ],
    },
    {
      type: 'category',
      label: 'Installation Guide',
      collapsed: false,
      items: [
        'docs/install/Requirements',
        'docs/install/Installation Steps',
      ],
    },
    {
      type: 'category',
      label: 'Integration Guide',
      collapsed: false,
      items: [
        'docs/integrate/Woocommerce',
        'docs/integrate/LMS Integration',
        'docs/integrate/Events',
        'docs/integrate/External API Integration',
      ],
    },
    {
      type: 'category',
      label: 'FAQ - Frequently Asked Questions',
      collapsed: true,
      items: [
        'docs/faq/What is SmartWisataChain?',
        'docs/faq/Is it free to use?',
        'docs/faq/Do I need coding skills?',
        'docs/faq/Can I use this on localhost?',
        'docs/faq/How to verify booking on blockchain?',
        'docs/faq/Where can I get support?',
      ],
    },
    {
      type: 'category',
      label: 'Contributing to SmartWisataChain',
      collapsed: true,
      items: [
        'docs/contribute/Getting Started',
        'docs/contribute/Contribution Ideas',
        'docs/contribute/Code of Conduct',
      ],
    }
    {
      type: 'category',
      label: 'Developer Hooks',
      collapsed: true,
      items: [
        'docs/hooks/Actions',
        'docs/hooks/Filters',
      ],
    }
  ],
};
module.exports = sidebars;
