import React, { Component } from "react";
import PropTypes from "prop-types";

// importerer Tab komponenten. Tabs.js (denne komponenten) er komponenten for å lage <Div>-en for å holde oversikt over alle Tab-komponentene.
import Tab from "./Tab";

class Tabs extends Component {
  // Dette er typesjekking, sikrer at vi ikke ender opp med verdier som ikke fungerer med oppsettet vårt.
  static propTypes = {
    children: PropTypes.instanceOf(Array).isRequired
  };

  constructor(props) {
    super(props);
    // State i denne classen er hvilken Tab det er som er aktiv. Setter den første Taben i listen av Tabs til å være aktiv i utgangspunktet (siden dette er naturlig). Bruker tabNameen til Taben (altså navnet til Taben) for å si hvilken som er aktiv.
    this.state = {
      activeTab: this.props.children[0].props.tabName
    };
  }

  // Denne funksjonen kalles fra Tab ved onClick gjennom handleTabClick i Tab. Brukes for å oppdatere state i Tabs-komponenten fra Tab-komponentene.
  onClickTabItem = tab => {
    this.setState({ activeTab: tab });
  };

  render() {
    // Det som skjer her er at man ser på this (objektet Tabs), også sier man at følgende skal gjøres til const: onClickTabItem, props sine children, og state sin activeTab. Her vil onClickTabItem, props sine children og state sin activeTab defineres ut ifra 'this' (objektet tab2), siden det settes til = this. Dette gjør at man kan kalle activeTab, children, og onClickTabItem senere i render funksjonen.
    const {
      onClickTabItem,
      props: { children },
      state: { activeTab }
    } = this;

    return (
      /* Her bygger vi div elementet tabs */
      <div className="tabs">
        <div className={"flex"}>
          <ol className="tabList">
            {/*  Her kaller vi children (som vi definerte utenfor return statementen, men inne i render()). Vi får altså children fra objektet Tabs. Deretter kaller vi map funksjonen på children, slik at vi kan utføre en funksjon på hvert element i children, og ende opp med en ny liste. For hvert element i children oppretter vi en Tab komponent hvor vi gir den props activeTab til å være lik activeTab fra Tabs (definert samme sted som children), key til å være lik tabName (som er definert ut ifra hvert child sin props (det er child vi utfører map funksjonen på)). Deretter blir onClick definert som onClickTabItem (også definert samtidig som children). Vi ender altså opp med å returnere en liste med Tab komponenter.*/}

            {children.map(child => {
              const { tabName } = child.props;

              return (
                <Tab
                  activeTab={activeTab}
                  key={tabName}
                  tabName={tabName}
                  handleTabClick={onClickTabItem}
                />
              );
            })}
          </ol>
        </div>
        {/* Her oppretter vi et til div, dette er innholdet i Tab som vises. Gjennomfører en ny map funksjon på children, og for hvert child her (Tab-er) så sjekker vi om det er den som er satt som activeTab. Hvis det er det, så returnerer vi child sin props sin childrne (altså innholdet i Tab-komponenten). */}

        <div className="tab-content">
          {children.map(child => {
            if (child.props.tabName === activeTab) return <div key={child.props.tabName} className={“shown”}> {child.props.children}</div>
             return <div key={child.props.tabName} className={“not-shown”}> {child.props.children}</div>
          })}
        </div>
      </div>
    );
  }
}

export default Tabs;
