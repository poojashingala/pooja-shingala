import React from "react";
import "./table.css"
import {
  Table, Box, Button, TextFilter, Header, Pagination, CollectionPreferences, ButtonDropdown
} from "@awsui/components-react";
import { dropdownItems, tableItems } from "../helpers/constants";

export default function TableComponent() {
  const [
    selectedItems,
    setSelectedItems
  ] = React.useState([{ name: "Item 2" }]);
  const [visibleColumns, setVisibleColumns] = React.useState([
    "variable",
    "type",
    "description"
  ]);

  

  

  return (
    <Table
      trackBy="name"
      /* ariaLabels={{
        selectionGroupLabel: "Items selection",
        allItemsSelectionLabel: ({ selectedItems }) =>
          `${selectedItems.length} ${
            selectedItems.length === 1 ? "item" : "items"
          } selected`,
        itemSelectionLabel: ({ selectedItems }, item) => {
          const isItemSelected = selectedItems.filter(
            i => i.name === item.name
          ).length;
          return `${item.name} is ${
            isItemSelected ? "" : "not"
          } selected`;
        }
      }} */
      columnDefinitions={[
        {
          id: "variable",
          header: "Variable name",
          cell: e => e.name,
          sortingField: "name"
        },
        {
          id: "value",
          header: "Text value",
          cell: (e:any) => e.alt,
          sortingField: "alt",
          minWidth: 300
        },
        { id: "type", header: "Type", cell: e => e.type },
        {
          id: "description",
          header: "Description",
          cell: (e:any) => e.description
        }
      ]}
      onSelectionChange={({ detail }) =>
        setSelectedItems(detail.selectedItems)
      }
      selectedItems={selectedItems}
      items={tableItems}
      loadingText="Loading resources"
      selectionType="single"
      visibleColumns={visibleColumns}
      empty={
        <Box textAlign="center" color="inherit">
          <b>No resources</b>
          <Box
            padding={{ bottom: "s" }}
            variant="p"
            color="inherit"
          >
            No resources to display.
          </Box>
          <Button>Create resource</Button>
        </Box>
      }
      filter={
        <TextFilter filteringPlaceholder="" filteringText={""} />
      }
      header={
        <Header id="header" className="header">
            <div className="container">
                <div className="title">
                    <p>Repositories <span className="color-blue subtext">Info</span></p>
                </div>
                <div className="buttonContainer">
                    <Button className="btn" iconName="refresh" ></Button>
                    <Button className="btn" iconName="notification" >Notify</Button>
                    <ButtonDropdown className="btn" expandToViewport={true} items={dropdownItems}>Clone URL</ButtonDropdown>
                    <Button className="btn">View Repository</Button>
                    <Button className="btn">Delete Repository</Button>
                    <Button className="btn create-btn">Create Repository</Button>
                </div>
            </div>
        </Header>
      }
      pagination={
        <Pagination
          currentPageIndex={1}
          pagesCount={1}
          ariaLabels={{
            nextPageLabel: "Next page",
            previousPageLabel: "Previous page",
            pageLabel: pageNumber =>
              `Page ${pageNumber} of all pages`
          }}
        />
      }
      preferences={
        <CollectionPreferences
          title="Preferences"
          confirmLabel="Confirm"
          cancelLabel="Cancel"
          /* preferences={{
            pageSize: 10,
            visibleContent: visibleColumns
          }} */
          onConfirm={(i:any) => setVisibleColumns(i.detail.visibleContent)}
          /* pageSizePreference={{
            title: "Select page size",
            options: [
              { value: 10, label: "10 resources" },
              { value: 20, label: "20 resources" }
            ]
          }} */
          visibleContentPreference={{
            title: "Select visible content",
            options: [
              {
                label: "Main distribution properties",
                options: [
                  {
                    id: "variable",
                    label: "Variable name",
                    editable: false
                  },
                  { id: "value", label: "Text value" },
                  { id: "type", label: "Type" },
                  {
                    id: "description",
                    label: "Description"
                  }
                ]
              }
            ]
          }}
        />
      }
    />
  );
}
