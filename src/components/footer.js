//import Foot from 'next/foot'

export default function Footer(args) {
    return (
      <>
        <footer class="container-fluid">
          <small>Built with <a href="#" class="secondary">{args.copy}</a> • <a href="#" class="secondary">Source code</a></small>
        </footer>
      </>
    )
  }
