import { useEffect, useState } from 'react';

export function useFadeEffect(deps) {
    let [fade, setFade] = useState('');

    useEffect(() => {
        let a = setTimeout(() => { setFade('end') }, 10); // 시간차를 둬서 automatic batching 방지
        
        return () => {
            clearTimeout(a);
            setFade(''); // end 뗐다가 부착
        };
    }, deps);

    return fade;
}
