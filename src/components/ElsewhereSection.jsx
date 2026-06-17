export default function ElsewhereSection() {
  return (
    <section style={{ marginTop: '0', marginBottom: '0', display: 'flex', justifyContent: 'center', width: '100%' }}>
      <div style={{ position: 'relative', width: '100%', paddingBottom: '60%' }}>
        {/* Script Text */}
        <div style={{ position: 'absolute', top: '0%', left: '33%', zIndex: 5, pointerEvents: 'none' }}>
          <span className="text-script" style={{ fontSize: '12vw', color: '#000', lineHeight: '1', fontWeight: '300' }}>elsewhere</span>
        </div>
        {/* Image 1: Clothes rack */}
        <img src="https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?auto=format&fit=crop&q=80&w=400" alt="Clothes rack" style={{ position: 'absolute', top: '15%', left: '0%', width: '28%', aspectRatio: '3/4', objectFit: 'cover', zIndex: 1 }} />
        {/* Image 2: Striped sweater */}
        <img src="https://images.unsplash.com/photo-1617019114583-affb34d1b3cd?auto=format&fit=crop&q=80&w=400" alt="Striped sweater" style={{ position: 'absolute', top: '20%', left: '21%', width: '29%', aspectRatio: '3/4', objectFit: 'cover', zIndex: 10, border: '15px solid #fff' }} />
        {/* Image 3: Bag and drink */}
        <div style={{ position: 'absolute', top: '5%', left: '44%', width: '27%', zIndex: 1, display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
          <img src="https://images.unsplash.com/photo-1509319117193-57bab727e09d?auto=format&fit=crop&q=80&w=400" alt="Bag and drink" style={{ width: '100%', aspectRatio: '1/1', objectFit: 'cover' }} />
          <div style={{ marginTop: '1rem', backgroundColor: '#000', color: '#fff', padding: '0.4rem 1rem', fontSize: '0.65rem', fontWeight: 'bold', letterSpacing: '0.15em' }}>@FASHION_JACKSON</div>
        </div>
        {/* Image 4: Woman walking */}
        <img src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80&w=400" alt="Woman walking" style={{ position: 'absolute', top: '25%', left: '74%', width: '26%', aspectRatio: '3/4', objectFit: 'cover', zIndex: 1 }} />
      </div>
    </section>
  );
}
