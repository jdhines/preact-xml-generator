import { h } from 'preact';
import { useRef, useState } from 'preact/hooks';
import {fullAdmin, partialAdmin, gpid} from './templates.js';

export function App(props) {
  const [clientId, setClientId] = useState('');
  const [fescoId, setFescoId] = useState('');
  const [checkFullAdmin, setCheckFullAdmin] = useState(false);
  const [checkPartialAdmin, setCheckPartialAdmin] = useState(false);
  const [checkGpid, setCheckGpid] = useState(false);
  const [checkAll, setCheckAll] = useState(false);
  const [xmlOutput, setXmlOutput] = useState([]);
  
  const xmlRefs = useRef([]);

  const handleReset = () => {
    setXmlOutput([]);
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    const clientIds = clientId
      .split('\n')
      .filter((id) => id.trim() !== '')
      .map(id => id.toUpperCase());
    const fescoIds = fescoId
      .split('\n')
      .filter((id) => id.trim() !== '')
      .map(id => id.replace(/^0+/, ''));
    const xmlLayouts = [];

    if((checkGpid && fescoIds.length === 0) || checkGpid && fescoIds.length !== clientIds.length) {
      alert('FESCO Org ID(s) are required for GPID. Make sure to enter the same number of FESCO IDs as Client IDs.');
      return;
    }

    console.log({ clientIds });
    for (const [idx, clientId] of clientIds.entries()) {
      if (checkFullAdmin) {
        xmlLayouts.push({
          id: clientId,
          category: 'Full Admin',
          xml: fullAdmin.replace(/CLNID/g, clientId)
        });

      }
      if (checkPartialAdmin) {
        xmlLayouts.push({
          id: clientId,
          category: 'Partial Admin',
          xml: partialAdmin.replace(/CLNID/g, clientId)
        });
      }
      if (checkGpid) {
        xmlLayouts.push({
          id: clientId,
          category: 'GPID',
          xml: gpid.replace(/CLNID/g, clientId).replace(/FESCOID/g, fescoIds[idx])
        });
        
        //TODO: replace FESCOID with ID from user (strip off any leading zeroes)
      }
      if (checkAll) {
        //
      }
      
    }

    setXmlOutput(xmlLayouts);
  };

  const handleCopy = (index) => {
    const section = xmlRefs.current[index];
    if (section) {
      const range = document.createRange();
      range.selectNode(section);
      window.getSelection().removeAllRanges();
      window.getSelection().addRange(range);

      try {
        document.execCommand('copy');
        alert('Content copied to clipboard!');
      } catch (err) {
        alert('Failed to copy content');
      }

      window.getSelection().removeAllRanges();
    }
  };
  return (
    <>
      <div class="flex items-start justify-center mt-4 min-h-screen">
        <div class="bg-white p-8 rounded shadow-lg max-w-screen-md ">
          <form action="">
            <label class="form-control">
              <div class="label">
                <span class="label-text font-bold">Client ID(s)</span>
                <span class="label-text-alt">One per line</span>
              </div>
              <textarea
                class="textarea textarea-bordered h-24"
                value={clientId}
                onChange={(e) => setClientId(e.target.value)}
                placeholder="Enter Client IDs, one per line"
              ></textarea>
            </label>
            <label class="form-control">
              <div class="label">
                <span class="label-text font-bold">FESCO ID(s)</span>
                <span class="label-text-alt">One per line</span>
              </div>
              <textarea
                class="textarea textarea-bordered h-24"
                value={fescoId}
                onChange={(e) => setFescoId(e.target.value)}
                placeholder="Enter FESCO Org IDs, one per line"
              ></textarea>
            </label>

            <label class="label font-bold">Layouts</label>
            <div class="form-control">
              <label class="cursor-pointer label">
                <span class="label-text">Full Admin</span>
                <input
                  type="checkbox"
                  class="checkbox checkbox-primary"
                  checked={checkFullAdmin}
                  onChange={(e) => setCheckFullAdmin(e.target.checked)}
                />
              </label>
            </div>
            <div class="form-control">
              <label class="cursor-pointer label">
                <span class="label-text">Partial Admin</span>
                <input
                  type="checkbox"
                  class="checkbox checkbox-primary"
                  checked={checkPartialAdmin}
                  onChange={(e) => setCheckPartialAdmin(e.target.checked)}
                />
              </label>
            </div>
            <div class="form-control">
              <label class="cursor-pointer label">
                <span class="label-text">GPID</span>
                <input
                  type="checkbox"
                  class="checkbox checkbox-primary"
                  checked={checkGpid}
                  onChange={(e) => setCheckGpid(e.target.checked)}
                />
              </label>
            </div>
            <div class="form-control">
              <label class="cursor-pointer label">
                <span class="label-text">All (BOMA)</span>
                <input
                  type="checkbox"
                  class="checkbox checkbox-primary"
                  checked={checkAll}
                  onChange={(e) => setCheckAll(e.target.checked)}
                />
              </label>
            </div>
            <section class="flex flex-start gap-2 my-2">
              <button onClick={handleSubmit} class="btn btn-neutral">
                Generate XML Layouts
              </button>
              <button onClick={handleReset} class="btn btn-default">
                Reset
              </button>
            </section>
          </form>
          <section class="mt-4">
            <h2 class="font-bold">XML Output:</h2>
            <div class="preview border-base-300 rounded-b-box rounded-se-box flex min-h-[6rem] min-w-[18rem] max-w-4xl flex-wrap items-center justify-center gap-2 overflow-x-hidden bg-cover bg-top p-4 [border-width:var(--tab-border)]">
            {xmlOutput.map((layout, index) => (
              <div class="collapse collapse-plus bg-base-200">
              <input type="checkbox" name="xmlOutput-accordion"/>
              <div class="collapse-title text-xl font-medium">
                {layout.id} - {layout.category}
              </div>
              <div 
                ref={el => xmlRefs.current[index] = el}
                key={index} 
                class="collapse-content">
              <button class="btn btn-accent absolute right-5 top-16" onClick={() => handleCopy(index)}>Copy</button>
                <textarea 
                  rows="5" 
                  class="w-full" 
                  >
                      {layout.xml}
                </textarea>
              </div>
            </div>
            ))}
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
