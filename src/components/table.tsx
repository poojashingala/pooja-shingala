import React, {useState} from "react";
import "./App.css"
import {
  Table, Button, TextFilter, Header, Pagination, CollectionPreferences, ButtonDropdown
} from "@awsui/components-react";
import { allItems, ChevronDown, columnDefinitions, dropdownItems } from "../helpers/constants";

export default function TableComponent() {
  const [
    selectedItems,
    setSelectedItems
  ] = useState([{ name: "Item 2" }]);
  const [visibleColumns, setVisibleColumns] = useState([
    "name",
    "description",
    "last-modified"
  ]);

  const [filterValue, setFilterValue] = useState("")

  return (
    <Table
      trackBy="name"
      columnDefinitions={columnDefinitions}
      onSelectionChange={({ detail }) =>
        setSelectedItems(detail.selectedItems)
      }
      selectedItems={selectedItems}
      items={allItems}
      loadingText="Loading resources"
      selectionType="single"
      visibleColumns={visibleColumns}
      filter={
        <TextFilter filteringPlaceholder="" filteringText={filterValue} onChange={(e) => {
          console.log(e)
          setFilterValue(e.detail.filteringText)
        }} />
      }
      header={
        <Header id="header" className="header">
            <div className="container">
                <div className="title">
                    <p>Repositories <span className="color-blue subtext">Info</span></p>
                </div>
                <div className="buttonContainer">
                    <Button className="btn" iconName="refresh" ></Button>
                    <Button className="btn notify-btn" iconName="notification" >{/* <div className="flex"><span>Notify</span> <ChevronDown /></div> */} Notify</Button>
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
          preferences={{
            pageSize: 10,
            visibleContent: visibleColumns
          }}
          onConfirm={(i:any) => setVisibleColumns(i.detail.visibleContent)}
          pageSizePreference={{
            title: "Select page size",
            options: [
              { value: 10, label: "10 resources" },
              { value: 20, label: "20 resources" }
            ]
          }}
          visibleContentPreference={{
            title: "Select visible columns",
            options: [
              {
                label: "Columns",
                options: [
                  {
                    id: "name",
                    label: "Name",
                    editable: false
                  },
                  { id: "description", label: "Description" },
                  { id: "last-modified", label: "Last Modified" },
                  {
                    id: "clone-url",
                    label: "Clone URL"
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
