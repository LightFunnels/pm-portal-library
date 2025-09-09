import React from "react";
import {
  Button,
  Card,
  CheckboxComponent,
  FormGroup,
  SelectComponent,
  SwitchComponent,
} from "@/components";
import { createRoot } from "react-dom/client";

export default function App() {
  const [selectValue, setSelectValue] = React.useState<string>("0");
  const [checkboxValue, setCheckboxValue] = React.useState<boolean>(false);
  const [switchValue, setSwitchValue] = React.useState<boolean>(false);
  return (

  <div className=" bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <div className="max-w-[1100px] mx-auto px-6 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Payment portal components</h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Form Controls Section */}
          <div className="space-y-8">
            <div className="bg-white  shadow-[0px_1px_3px_0px_rgba(25,30,36,0.08)]  rounded-2xl  border border-gray-200 p-8 hover:shadow-xl transition-all duration-300">
              <h2 className="text-2xl font-semibold text-gray-800 mb-6 pb-3 border-b border-gray-100">Form Controls</h2>
              
              <div className="space-y-6">
                <div className="bg-gray-50 rounded-xl p-6 hover:bg-gray-100 transition-colors">
                  <label className="block text-sm font-medium text-gray-700 mb-3">Select Component</label>
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

                <div className="bg-gray-50 rounded-xl p-6 hover:bg-gray-100 transition-colors">
                  <label className="block text-sm font-medium text-gray-700 mb-3">Checkbox Component</label>
                  <CheckboxComponent
                    label="Check it!!!"
                    checked={checkboxValue}
                    onChange={(e) => setCheckboxValue(e.target.checked)}
                  />
                </div>

                <div className="bg-gray-50 rounded-xl p-6 hover:bg-gray-100 transition-colors">
                  <label className="block text-sm font-medium text-gray-700 mb-3">Switch Component</label>
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
          <div className="space-y-8">
            <div className="bg-white  shadow-[0px_1px_3px_0px_rgba(25,30,36,0.08)]  rounded-2xl  border border-gray-200 p-8 hover:shadow-xl transition-all duration-300">
              <h2 className="text-2xl font-semibold text-gray-800 mb-6 pb-3 border-b border-gray-100">Button Components</h2>
              
              <div className="bg-gray-50 rounded-xl p-6">
                <div className="grid grid-cols-1 gap-4 ">
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

            <div className="bg-white  shadow-[0px_1px_3px_0px_rgba(25,30,36,0.08)]  rounded-2xl  border border-gray-200 p-8 hover:shadow-xl transition-all duration-300">
              <h2 className="text-2xl font-semibold text-gray-800 mb-6 pb-3 border-gray-100 border-b">Card Component</h2>
              
              <Card
                title="Sub-payment Gateway 01"
                description="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type."
                thumbnail="https://app.lightfunnels.com/assets/6d37c7402e6e288ae3b1.png"
                testModeElement={
                  <SwitchComponent
                    label="Test mode"
                    value={switchValue}
                    onChange={(e) => setSwitchValue(e.target.checked)}
                    small
                  />
                }
              >
                <div className="bg-gray-50 rounded-xl space-y-4">
                  <CheckboxComponent
                    label="Add Installment fees"
                    checked={checkboxValue}
                    onChange={(e) => setCheckboxValue(e.target.checked)}
                  />
                  <FormGroup label="Language" className="w-full">
                    <SelectComponent
                      isSearchable
                      className="w-full"
                      value={selectValue}
                      options={[
                        { value: "0", label: "English" },
                        { value: "1", label: "Spanish" }
                      ]}
                      onChange={(v) => setSelectValue(v)}
                    />
                  </FormGroup>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


createRoot(document.getElementById('app')).render(<App />)