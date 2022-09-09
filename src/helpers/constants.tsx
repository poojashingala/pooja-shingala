
export const  tableItems = [
    {
      name: "Item 1",
      alt: "First",
      description: "This is the first item",
      type: "1A",
      size: "Small"
    },
    {
      name: "Item 2",
      alt: "Second",
      description: "This is the second item",
      type: "1B",
      size: "Large"
    },
    {
      name: "Item 3",
      alt: "Third",
      description: "-",
      type: "1A",
      size: "Large"
    },
    {
      name: "Item 4",
      alt: "Fourth",
      description: "This is the fourth item",
      type: "2A",
      size: "Small"
    },
    {
      name: "Item 5",
      alt: "-",
      description:
        "This is the fifth item with a longer description",
      type: "2A",
      size: "Large"
    },
    {
      name: "Item 6",
      alt: "Sixth",
      description: "This is the sixth item",
      type: "1A",
      size: "Small"
    }
];


export const columnDefinitions = [
    {
      id: "name",
      header: "Name",
      cell: (e: any) => e.name,
      width: 170,
      minWidth: 165,
      sortingField: "name"
    },
    {
      id: "description",
      header: "Description",
      cell: (e: any) => e.description,
      width: 110,
      minWidth: 110,
    },
    {
      id: "date",
      header: "Last Modified",
      cell: (e: any) => e.date,
      width: 200,
      minWidth: 170
    }
];

export const allItems = [
    {
      name: "readydoc-ui",
      description: "-",
      date: "14 hours ago",
    },
    {
      name: "readydoc-api",
      description: "-",
      date: "15 hours ago",
    },
    {
      name: "digitalform-api",
      description: "-",
      date: "3 days ago",
    },
    {
      name: "digitalform-ui",
      description: "-",
      date: "6 days ago",
    },
    
    
  ];

  export const dropdownItems = [
    { id: "clonehttps", text: "Clone HTTPS" },
    { id: "clonessh", text: "Clone SSH" },
    { id: "clonehttpsgrc", text: "Clone HTTPS (GRC)" },
    { id: "connectionsteps", text: "Connection steps" },
  ]

  export const menuItems: any = [
    {
        text: "Source . CodeCommit",
        type: "expandable-link-group",
        href: "/",
        defaultExpanded: true,
        items: [
          {
            text: "Getting Started",
            type: "link",
            href: "/"
          },
          {
            text: "Repositories",
            type: "link",
            href: "/repositories"
          },
          {
            text: "Approval rule template",
            type: "link",
            href: "/"
          },
        ]
    }, 
    {
        text: "Artifacts . CodeArtifacts",
        type: "expandable-link-group",
        href: "/",
        items: []
    }, 
    
    {
        text: "Build . CodeBuild",
        type: "expandable-link-group",
        href: "/",
        items: []
    },
    {
        text: "Deploy . CodeDeploy",
        type: "expandable-link-group",
        href: "/",
        items: []
    },
    {
        text: "Pipeline . CodePipeline",
        type: "expandable-link-group",
        href: "/",
        items: []
    },
    {
        text: "Settings",
        type: "expandable-link-group",
        href: "/",
        items: []
    },
   
    /* {type: 'section', text: 'Source . CodeCommit', defaultExpanded: true, items: [
        {type: 'link', text: 'Getting Started', href: '/', },
        {type: 'link', text: 'Repositories', href: '/'},
        {type: 'link', text: 'Getting Started', href: '/'},
    ]}, */
    /* {type: 'section', text: 'Artifacts . CodeArtifact', defaultExpanded: false }, */
    /* {type: 'section', text: 'Build . CodeBuild', defaultExpanded: false },
    {type: 'section', text: 'Deploy . CodeDeploy', defaultExpanded: false },
    {type: 'section', text: 'Pipeline . CodePipeline', defaultExpanded: false },
    {type: 'section', text: 'Settings', defaultExpanded: false },
    {type: 'link-group', text: 'Go to resource', href: '/'},
    {type: 'link-group', text: 'Feedback', href: '/'}, */
  ]