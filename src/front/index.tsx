import React, { Fragment } from "react";
import {
  Button,
  Card,
  CheckboxComponent,
  FormGroup,
  SelectComponent,
  SubPaymentCard,
  SwitchComponent,
} from "@/components";
import { createRoot } from "react-dom/client";
import "../styles/global.css";
import "./main.css"
import { Alert } from "@/components/alert";
import { InputComponent } from "@/components/input";

export default function App() {
  const [selectValue, setSelectValue] = React.useState<string>("0");
  const [checkboxValue, setCheckboxValue] = React.useState<boolean>(false);
  const [switchValue, setSwitchValue] = React.useState<boolean>(false);

  return (
    <div className="app">
      <div className="wrap">
        {/* Header */}
        <div className="header">
          <h1 className="h1">Payment portal components</h1>
        </div>

        <div className="grid">
          {/* Form Controls Section */}
          <div className="stack-8">
            <div className="card">
              <h2 className="card-title">Form Controls</h2>

              <div className="stack-6">
                <div className="section">
                  <label className="label">Select Component</label>
                  <SelectComponent
                    isSearchable
                    value={selectValue}
                    options={[
                      { value: "0", label: "Option #1" },
                      { value: "1", label: "Option #2" }
                    ]}
                    onChange={(v) => setSelectValue(v)}
                  />
                </div>

                <div className="section">
                  <label className="label">Checkbox Component</label>
                  <CheckboxComponent
                    label="Check it!!!"
                    checked={checkboxValue}
                    onChange={(e) => setCheckboxValue(e.target.checked)}
                  />
                </div>

                <div className="section">
                  <label className="label">Switch Component</label>
                  <SwitchComponent
                    label="Switch me"
                    value={switchValue}
                    onChange={(e) => setSwitchValue(e.target.checked)}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Buttons & Cards Section */}
          <div className="stack-8">
            <div className="card">
              <h2 className="card-title">Button Components</h2>

              <div className="section">
                <div className="btn-grid">
                  <Button primary small block>
                    <span>Primary Button</span>
                  </Button>
                  <Button danger>
                    <span>Danger Button</span>
                  </Button>
                  <Button spinning>
                    <span>Default Button</span>
                  </Button>
                </div>
              </div>
            </div>

            <div>
              <SubPaymentCard
                label="Apple pay"
                onChange={() => { }}
                value={false}
                thumbnail="https://app.lightfunnels.com/assets/17e549a22f1083ef8936.png"
                className={"pm-card"}
              />
            </div>

            <div className="">
              <Alert
                icon={<svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.4327 3.53828L1.66854 16.4999C1.50846 16.7772 1.42376 17.0915 1.42286 17.4116C1.42196 17.7317 1.5049 18.0465 1.66343 18.3246C1.82195 18.6027 2.05053 18.8345 2.32643 18.9968C2.60233 19.1592 2.91593 19.2464 3.23604 19.2499H18.7644C19.0845 19.2464 19.3981 19.1592 19.674 18.9968C19.9499 18.8345 20.1785 18.6027 20.337 18.3246C20.4955 18.0465 20.5784 17.7317 20.5775 17.4116C20.5766 17.0915 20.4919 16.7772 20.3319 16.4999L12.5677 3.53828C12.4043 3.26887 12.1742 3.04614 11.8996 2.89155C11.6251 2.73697 11.3153 2.65576 11.0002 2.65576C10.6851 2.65576 10.3753 2.73697 10.1008 2.89155C9.82621 3.04614 9.59612 3.26887 9.4327 3.53828V3.53828Z" stroke="#FF7A00" stroke-width="1.55833" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M11 8.25V11.9167" stroke="#FF7A00" stroke-width="1.55833" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M11 15.5742V15.5842" stroke="#FF7A00" stroke-width="1.55833" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                }
                label="Something went wrong"
                message={"lorem lorem"}
                warning
              />
              <br/>
              <InputComponent
                value="text"
                onChange={(value) => {
                  console.log(value)
                }}
                
              />

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}



createRoot(document.getElementById('app')).render(<App />)