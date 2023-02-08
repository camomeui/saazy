/** @type {import('@/types').DocsSidebarConfig} */
const sidebar = {
  items: [
    {
      id: "develop",
      label: "Develop",
      open: true,
      type: "collapsible",
      items: [
        { id: "introduction" },
        { id: "get-started" },
        { id: "site-config" },
        { id: "forms" },
        { id: "custom-theme" },
        {
          id: "deploy",
        },
      ],
    },
    {
      id: "cms",
      label: "CMS",
      open: true,
      type: "collapsible",
      items: [
        { id: "cms-overview", label: "Overview" },
        {
          id: "markdown",
        },
        {
          id: "blog",
        },
        {
          id: "docs",
        },
      ],
    },
    {
      id: "support",
      label: "Support",
      open: true,
      type: "collapsible",
      items: [
        {
          id: "faq",
        },
        { id: "license" },
      ],
    },
  ],
};

export default sidebar;
