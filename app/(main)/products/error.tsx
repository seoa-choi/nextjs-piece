'use client';

import { useRouter } from 'next/navigation';
import { startTransition } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  const router = useRouter();

  function reload() {
    // 오류를 캐치한 후 복구해야하므로 우선순위를 낮춰 에러 뒤에 실행되게 함
    startTransition(() => {
      // 새로고침
      router.refresh();
      // 초기화
      reset();
    });
  }

  return (
    <div className="p-[80px]">
      <p>{error.message}</p>
      <button type="button" onClick={() => reload()} className="btn">
        다시 시도
      </button>
    </div>
  );
}
