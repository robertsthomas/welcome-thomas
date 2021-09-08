import {
  Pane,
  Avatar,
  Text,
  TextInputField,
  EditIcon,
  Button,
  UnorderedList,
  ListItem,
  TickIcon,
  SmallPlusIcon,
  SmallTickIcon,
} from "evergreen-ui";
import React, { useState } from "react";
import { formatter } from "../utils";

const Offer = ({ selectedOffer, setIsShown, benefits, finishOffer }) => {
  const currentOffer = selectedOffer && selectedOffer[0];
  const [editField, setEditField] = useState(true);

  return (
    <Pane
      display="flex"
      justifyContent="center"
      flexDirection="column"
      alignItems="center"
    >
      {currentOffer && (
        <>
          <Avatar size={100} marginBottom={10} src={currentOffer.avatar} />
          <Pane marginTop={80} width="50%">
            <Text fontSize={18}>
              Confirm your offer information and continue with extending an
              offer to {currentOffer.fullName}.
            </Text>
            <Pane
              marginTop={40}
              display="flex"
              justifyContent="space-between"
              height="300px"
            >
              <Pane id="left">
                <span style={{ display: "flex", alignItems: "center" }}>
                  <TextInputField
                    label="Offer Amount"
                    value={formatter.format(currentOffer.salary)}
                    type="text"
                    disabled={editField}
                    width={130}
                  />
                  {!editField ? (
                    <SmallTickIcon
                      onClick={() => setEditField((prevState) => !prevState)}
                      cursor="pointer"
                      marginLeft={10}
                    />
                  ) : (
                    <EditIcon
                      onClick={() => setEditField((prevState) => !prevState)}
                      cursor="pointer"
                      marginLeft={10}
                    />
                  )}
                </span>
              </Pane>
              <Pane id="right">
                <Text fontWeight="bold">Eligible Benefits</Text>

                <span
                  style={{
                    height: 150,
                    overflow: "auto",
                    display: "flex",
                    alignItems: "center",
                    flexDirection: "column",
                  }}
                >
                  <UnorderedList icon={TickIcon} iconColor="success">
                    {benefits
                      .filter((item) => item.checked)
                      .map((benefit, i) => (
                        <ListItem key={i}>{benefit.title}</ListItem>
                      ))}
                  </UnorderedList>
                </span>
                <Button
                  marginX="auto"
                  width="100%"
                  onClick={() => setIsShown((prevState) => !prevState)}
                  appearance="minimal"
                  iconAfter={SmallPlusIcon}
                >
                  Add
                </Button>
              </Pane>
            </Pane>
          </Pane>
        </>
      )}
      <Button
        size="large"
        width="45%"
        appearance="primary"
        intent="success"
        marginTop="auto"
        onClick={() => finishOffer()}
      >
        Send Offer
      </Button>
    </Pane>
  );
};

export default Offer;
