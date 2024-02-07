// 날짜별 그룹화된 데이터를 정렬
async function getSortedGroupedPosts() {
  const data = await fetchData()
  const grouped = {}
  for (const item of data) {
    const date = item.TransactionDate.split('T')[0]
    if (!grouped[date]) {
      grouped[date] = []
    }
    grouped[date].push(item)
  }
  const sortedGrouped = {}
  Object.keys(grouped)
    .sort()
    .forEach((date) => {
      sortedGrouped[date] = grouped[date]
    })
  return sortedGrouped
}

module.exports = { getSortedGroupedPosts }
