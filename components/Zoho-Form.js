import React, { useEffect, useRef } from 'react';

const ZohoForm = () => {
  const iframeRef = useRef(null);

  useEffect(() => {
    try {
      const handleMessage = (event) => {
        const evntData = event.data;
        if (evntData && typeof evntData === 'string') {
          const zf_ifrm_data = evntData.split('|');
          if (zf_ifrm_data.length === 2 || zf_ifrm_data.length === 3) {
            const zf_perma = zf_ifrm_data[0];
            const zf_ifrm_ht_nw = parseInt(zf_ifrm_data[1], 10) + 15 + 'px';
            const iframe = iframeRef.current;
            if (iframe && iframe.src.includes('formperma') && iframe.src.includes(zf_perma)) {
              const prevIframeHeight = iframe.style.height;
              let zf_tout = false;
              if (zf_ifrm_data.length === 3) {
                iframe.scrollIntoView();
                zf_tout = true;
              }
              if (prevIframeHeight !== zf_ifrm_ht_nw) {
                if (zf_tout) {
                  setTimeout(() => {
                    iframe.style.height = zf_ifrm_ht_nw;
                  }, 500);
                } else {
                  iframe.style.height = zf_ifrm_ht_nw;
                }
              }
            }
          }
        }
      };

      window.addEventListener('message', handleMessage);

      return () => {
        window.removeEventListener('message', handleMessage);
      };
    } catch (e) {
      // silently fail
    }
  }, []);

  return (
    <div id="zf_div_3vsT6r1EJKUDBwhpnjaT6HO-ug8Iv00Z82BHLAwyCxs" style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
      <iframe
        ref={iframeRef}
        src="https://forms.zohopublic.in/nirajthaperdxgm1/form/SecureYourPlaceatRCA2025/formperma/3vsT6r1EJKUDBwhpnjaT6HO-ug8Iv00Z82BHLAwyCxs?zf_rszfm=1"
        title="Fill the below Details to Register"
        aria-label="Fill the below Details to Register"
        style={{
          border: 'none',
          height: '1407px',
          width: '90%',
          transition: 'all 0.5s ease',
        }}
      />
    </div>
  );
};

export default ZohoForm;
