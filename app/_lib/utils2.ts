export function formatDate(date: Date): string {
  return date.toLocaleDateString('ko-KR', {
    year: 'numeric',
    month: 'long',
    day: '2-digit',
  });
}
export function generatePagination2(currentPage: number, totalPages: number) {
  // 7페이지 이하일 때는 모든 페이지를 보여준다.
  if (totalPages <= 7) {
    return Array.from({ length: totalPages }, (_, i) => i + 1);
  }

  // 7페이지 초과일 때는 현재 페이지를 기준으로 앞뒤로 2페이지씩 보여준다.
  if (currentPage <= 3) {
    return [1, 2, 3, '...', totalPages - 1, totalPages];
  }

  // 마지막 페이지에 가까울 때는 마지막 3페이지를 보여준다.
  if (currentPage >= totalPages - 2) {
    return [1, 2, '...', totalPages - 2, totalPages - 1, totalPages];
  }

  // 중간 페이지일 때는 앞뒤 페이지만 보여준다
  return [
    1,
    '...',
    currentPage - 1,
    currentPage,
    currentPage + 1,
    '...',
    totalPages,
  ];
}

// 페이지네이션 처리 다시하기
// > 페이지 전체 수의 반 이상 넘어가면 1 ... ( > 2생략 > 3생략)
// <  "     ( < 6생략<7생략 )...8
