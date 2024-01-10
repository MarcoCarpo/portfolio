import { useQuery } from '@tanstack/react-query';
import { getData } from '../api';
import { UserJson } from './interfaces';

export const useData = () => {
    const { data, error, isLoading } = useQuery<UserJson>({
        queryKey: ['data'],
        queryFn: getData,
    });

    return { data, error, isLoading };
};

import { useEffect, useMemo, useState } from 'react';
import { Helmet } from 'react-helmet';

export const useBreakpoint = () => {
    const [breakpoint, setBreakpoint] = useState('');
    const customBreakpoints = useMemo(() => [768, 1280], []);

    useEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth;
            let newBreakpoint = '';

            if (width < customBreakpoints[0]) {
                newBreakpoint = customBreakpoints[0].toString();
            } else {
                for (let i = 1; i < customBreakpoints.length; i++) {
                    if (width < customBreakpoints[i]) {
                        newBreakpoint = customBreakpoints[i - 1].toString();
                        break;
                    }
                }
                if (!newBreakpoint) {
                    newBreakpoint = customBreakpoints[customBreakpoints.length - 1].toString();
                }
            }

            setBreakpoint(newBreakpoint);
        };

        window.addEventListener('resize', handleResize);
        handleResize();

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [customBreakpoints]);

    return breakpoint;
};

export const useIubenda = () => {
    useEffect(() => {
        const loader = () => {
            const script = document.createElement('script');
            script.src = 'https://cdn.iubenda.com/iubenda.js';
            document.body.appendChild(script);
        };

        window.addEventListener('load', loader, false);

        const script1 = document.createElement('script');
        script1.type = 'text/javascript';
        script1.innerHTML = `
      var _iub = _iub || [];
      _iub.csConfiguration = {"askConsentAtCookiePolicyUpdate":true,"enableFadp":true,"enableLgpd":true,"enableUspr":true,"fadpApplies":true,"floatingPreferencesButtonDisplay":"bottom-right","lang":"en","perPurposeConsent":true,"siteId":3430361,"usprApplies":true,"whitelabel":false,"cookiePolicyId":84177508, "banner":{ "acceptButtonDisplay":true,"closeButtonDisplay":false,"customizeButtonDisplay":true,"explicitWithdrawal":true,"listPurposes":true,"position":"float-bottom-center","rejectButtonDisplay":true,"showTitle":false }};
    `;
        document.body.appendChild(script1);

        const script2 = document.createElement('script');
        script2.type = 'text/javascript';
        script2.src = 'https://cs.iubenda.com/autoblocking/3430361.js';
        document.body.appendChild(script2);

        const script3 = document.createElement('script');
        script3.type = 'text/javascript';
        script3.src = '//cdn.iubenda.com/cs/gpp/stub.js';
        document.body.appendChild(script3);

        const script4 = document.createElement('script');
        script4.type = 'text/javascript';
        script4.src = '//cdn.iubenda.com/cs/iubenda_cs.js';
        script4.async = true;
        document.body.appendChild(script4);
    }, []);

    const PrivacyPolicy = () => {
        return (
            <>
                <Helmet>
                    <script>
                        {`
(function (w,d) {
var loader = function () {
var s = d.createElement("script"),
    tag = d.getElementsByTagName("script")[0];
s.src="https://cdn.iubenda.com/iubenda.js";
tag.parentNode.insertBefore(s,tag);
};
if(w.addEventListener){
w.addEventListener("load", loader, false);
}else if(w.attachEvent){
w.attachEvent("onload", loader);
}else{
w.onload = loader;
}
})(window, document);
`}
                    </script>
                </Helmet>
                <a
                    href="https://www.iubenda.com/privacy-policy/84177508"
                    className="iubenda-white iubenda-noiframe iubenda-embed iubenda-noiframe"
                    title="Privacy Policy"
                >
                    Privacy Policy
                </a>
            </>
        );
    };

    const CookiePolicy = () => {
        return (
            <>
                <Helmet>
                    <script>
                        {`
            (function (w, d) {
              var loader = function () {
                var s = d.createElement("script"),
                    tag = d.getElementsByTagName("script")[0];
                s.src = "https://cdn.iubenda.com/iubenda.js";
                tag.parentNode.insertBefore(s, tag);
              };
              if (w.addEventListener) {
                w.addEventListener("load", loader, false);
              } else if (w.attachEvent) {
                w.attachEvent("onload", loader);
              } else {
                w.onload = loader;
              }
            })(window, document);
          `}
                    </script>
                </Helmet>
                <a
                    href="https://www.iubenda.com/privacy-policy/84177508/cookie-policy"
                    className="iubenda-black iubenda-noiframe iubenda-embed iubenda-noiframe"
                    title="Cookie Policy"
                >
                    Cookie Policy
                </a>
            </>
        );
    };

    return { PrivacyPolicy, CookiePolicy };
};
