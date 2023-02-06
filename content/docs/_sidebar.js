/** @type {import('@/types').DocsSidebarConfig} */
const sidebar = {
  items: [
    {
      id: "introduction",
    },
    {
      id: "components",
    },
    {
      id: "develop",
      label: "Develop",
      open: true,
      items: [
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
      items: [{ id: "faq" }, { id: "license" }, { id: "contact" }],
    },
  ],
};

export default sidebar;
