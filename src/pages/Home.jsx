import React, { useState, useEffect } from "react";
import {
  Pane,
  Heading,
  Spinner,
  Text,
  SideSheet,
  Checkbox,
  TextInputField,
  PlusIcon,
  IconButton,
} from "evergreen-ui";
import Offer from "./Offer";
import Offered from "./Offered";
import { Nav, TableData } from "../components";
import ReactSwipe from "react-swipe";
import data from "../data.json";

const benefitList = [
  { title: "Culture", checked: true },
  { title: "Promotion Opportunity", checked: true },
  { title: "100% Health Coverage", checked: true },
  { title: "Remote Office", checked: true },
  { title: "Unlimited Vacation", checked: false },
  { title: "401K match", checked: false },
];

function Home() {
  const [offerId, setOfferId] = useState();
  const [selectedOffer, setSelecctedOffer] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [isShown, setIsShown] = useState(false);
  const [benefits, setBenefits] = useState(benefitList);
  const [addBenefit, setAddBenefit] = useState("");
  let swipeEl;

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  });

  useEffect(() => {
    if (offerId) {
      const selected = data.filter((item) => item.id === offerId);
      setSelecctedOffer(selected);
      swipeEl.next();
    }
  }, [offerId]);

  const getOfferId = (id) => setOfferId(id);

  const setChecked = (e, benefit) => {
    const checkbox = benefits.findIndex((item) => item.title == benefit.title);
    const newBenefits = [...benefits];
    newBenefits[checkbox] = {
      ...newBenefits[checkbox],
      checked: !newBenefits[checkbox].checked,
    };
    setBenefits(newBenefits);
  };

  const appendNewBenefit = () => {
    setBenefits((prevState) => [
      ...prevState,
      {
        title: addBenefit,
        checked: true,
      },
    ]);
  };

  const finishOffer = () => {
    swipeEl.next();
  };

  return (
    <Pane
      className="outter"
      height="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
      background="yellowTint"
    >
      <Pane
        className="inner"
        height="80%"
        width="80%"
        background="gray75"
        borderTopLeftRadius={8}
        borderTopRightRadius={8}
        position="relative"
      >
        <Nav />
        {isLoading ? (
          <Pane
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            height={400}
          >
            <Spinner />
            <Text>Loading data</Text>
          </Pane>
        ) : (
          <>
            <Pane marginTop={10} width="80%" marginX="auto">
              <Heading
                style={{ paddingBottom: 5 }}
                marginBottom={20}
                borderBottom="1px solid lightgrey"
                paddingY={20}
                size={900}
              >
                Make an offer
              </Heading>

              <ReactSwipe
                className="carousel"
                swipeOptions={{ continuous: false }}
                ref={(el) => (swipeEl = el)}
              >
                <div
                  className="table"
                  style={{ overflow: "auto", height: "600px" }}
                >
                  <TableData getOfferId={getOfferId} data={data} />
                </div>
                <div>
                  <Offer
                    benefits={benefits}
                    setBenefits={setBenefits}
                    setIsShown={setIsShown}
                    selectedOffer={selectedOffer}
                    finishOffer={finishOffer}
                  />
                </div>
                <div>
                  <Offered
                    selectedOffer={selectedOffer}
                  />
                </div>
              </ReactSwipe>
            </Pane>
          </>
        )}
      </Pane>
      {/* end inner */}
      <SideSheet isShown={isShown} onCloseComplete={() => setIsShown(false)}>
        <Pane marginLeft={20} marginTop={20}>
          <Heading>Choose company benefits</Heading>

          {benefits.map((benefit, i) => {
            const isChecked = benefit.checked;
            return (
              <Checkbox
                onChange={(e) => setChecked(e, benefit)}
                checked={isChecked}
                key={i}
                label={benefit.title}
              />
            );
          })}
          <Pane
            display="flex"
            justifyContent="space-evenly"
            alignItems="center"
            width={200}
          >
            <TextInputField
              value={addBenefit}
              onChange={(e) => setAddBenefit(e.target.value)}
              marginY="auto"
              width={140}
              placeholder="Add new benefit"
            />
            <IconButton
              onClick={appendNewBenefit}
              size="small"
              icon={PlusIcon}
              marginY="auto"
              marginRight={10}
            />
          </Pane>
        </Pane>
      </SideSheet>
    </Pane>
  );
}

export default Home;
