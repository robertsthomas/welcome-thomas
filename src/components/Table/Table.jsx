import React, { useState } from "react";
import {
  Avatar,
  Button,
  CaretDownIcon,
  CaretUpIcon,
  Pane,
  Table,
  Text,
} from "evergreen-ui";
import styled, { css } from "styled-components";
import { formatter } from "../../utils";

const ExpandedSection = styled.div`
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.5s linear;

  ${(props) =>
    props.isExpanded &&
    css`
      max-height: 20em;
    `}
`;

const TableData = ({ data, getOfferId }) => {
  const [openedRows, setOpenedRows] = useState([]);
  

  const toggleRow = (index) => {
    openedRows.includes(index)
      ? setOpenedRows(openedRows.filter((openedIndex) => openedIndex !== index))
      : setOpenedRows((prevState) => [...prevState, index]);
  };

  return (
    <Table.Body data-testid="table">
      {data &&
        data.map((item) => {
          const isExpanded = openedRows.includes(item.id);

          return (
            <React.Fragment key={item.id}>
              <Table.Row
                tabIndex="0"
                role="button"
                data-testid="table-row"
                onSelect={() => toggleRow(item.id)}
                isSelectable
              >
                <Pane display="flex" justifyContent="space-between" width={250}>
                  <Table.Cell>
                    <Avatar size={35} src={item.avatar} />
                  </Table.Cell>
                  <Table.TextCell>{item.fullName}</Table.TextCell>
                </Pane>
                <Pane
                  display="flex"
                  justifyContent="space-between"
                  marginLeft="auto"
                >
                  <Table.TextCell textAlign="left" minWidth={150}>
                    {item.city}, {item.state}
                  </Table.TextCell>
                  <Table.TextCell>
                    {!isExpanded ? <CaretDownIcon /> : <CaretUpIcon />}
                  </Table.TextCell>
                </Pane>
              </Table.Row>

              <ExpandedSection
                data-testid="row-expanded"
                isExpanded={isExpanded}
                background="tint2"
              >
                <Table.Body>
                  <Table.Row>
                    <Table.TextCell flexBasis={400}>
                      <Text fontSize={10}>Position: {item.job}</Text>
                    </Table.TextCell>
                    <Table.TextCell>
                      <Text fontSize={10}>
                        Asking: {formatter.format(item.salary)}
                      </Text>
                    </Table.TextCell>
                    <Table.Cell>
                      <Button onClick={() => getOfferId(item.id)} size="small">
                        Offer
                      </Button>
                    </Table.Cell>
                  </Table.Row>
                </Table.Body>
              </ExpandedSection>
            </React.Fragment>
          );
        })}
    </Table.Body>
  );
};

export default TableData;
