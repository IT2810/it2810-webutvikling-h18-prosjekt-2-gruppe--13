import React, { Component } from "react";

import PropTypes from "prop-types";

class Tab extends Component {
  // Her bestemmes det at activeTab, tabName, og handleTabClick må være string, string og funksjon. Sikrer at vi ikke får feil på grunn av feile verdier for disse.

  // onClick funksjonen henter tabName og Onclick fra objektet sine props. Deretter vil den kalle onClick hentet fra props, med tabName som den også nettopp hentet fra props. Dette vil resultere i et kall på onClickTabItem funksjonen definert i Tabs-komponenten, og som settes som onClick funksjon i opprettelsen av Tab-komponenter.
  handleTabClick = () => {
    const { tabName, handleTabClick } = this.props;
    handleTabClick(tabName);
  };

  render() {
    /* Her defineres onClick, activeTab og tabName til å være lik det som er i 'this' (Tab-komponenten). Kan dermed kalles i resten av render().
    */
    const {
      handleTabClick,
      props: { activeTab, tabName }
    } = this;

    let className = "tabItem flex-child";

    // Setter bare className til å være likt tab-list-item tab-list-active hvis denne Taben er den som er aktiv.
    if (activeTab === tabName) {
      className += " activeTab";
    }

    // Returnerer et <li> element til Tabs-komponenten.
    return (
      <li className={className} onClick={handleTabClick}>
        {" "}
        {tabName}{" "}
      </li>
    );
  }
}

// Typesjekking for å sikre at verdiene er gyldige.
Tab.propTypes = {
  activeTab: PropTypes.string.isRequired,
  tabName: PropTypes.string.isRequired,
  handleTabClick: PropTypes.func.isRequired
};

export default Tab;
