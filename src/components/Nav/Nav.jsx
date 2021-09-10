import React from "react";
import {
  Pane,
  Heading,
  Popover,
  Menu,
  Position,
  MenuIcon,
  Pill,
  HomeIcon,
} from "evergreen-ui";

const Nav = ({ goToHome }) => {
  return (
    <Pane
      alignItems="center"
      display="flex"
      justifyContent="space-between"
      background="red700"
      elevation={2}
      height={50}
      borderTopRightRadius={8}
      borderTopLeftRadius={8}
      paddingX={20}
    >
      <Heading is="h1" color="white">
        <HomeIcon
          size={15}
          marginRight={10}
          style={{ cursor: "pointer" }}
          onClick={() => goToHome()}
        />
        Welcome, Thomas
      </Heading>
      <Popover
        position={Position.BOTTOM_RIGHT}
        content={
          <div data-testid="menu">
            <Menu>
              <Menu.Group>
                <Menu.Item>
                  Offers
                  <Pill display="inline-flex" margin={8} color="green">
                    3
                  </Pill>
                </Menu.Item>
                <Menu.Item>Settings</Menu.Item>
                <Menu.Item>Logout</Menu.Item>
              </Menu.Group>
            </Menu>
          </div>
        }
      >
        <MenuIcon style={{ cursor: "pointer" }} color="white" />
      </Popover>
    </Pane>
  );
};

export default Nav;
